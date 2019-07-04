module Results
  class Sharpen
    def self.call(payload)
      new(payload).call
    end
  
    def initialize(payload)
      @income = payload[:income]
      @contribution = payload[:contribution]
      @zipcode = payload[:zipcode]
  
      @price_per_sqm = payload[:price_per_sqm]
      @purchase_surface = payload[:purchase_surface]
  
      @mortgage_rate = payload[:mortgage_rate]
      @mortgage_duration = payload[:mortgage_duration]
      @insurance_rate = payload[:insurance_rate]
  
      @land_tax = payload[:land_tax]
      @notary_fees = payload[:notary_fees]
      @guaranty_fees = payload[:guaranty_fees]
      @property_charges = payload[:property_charges]
  
      @rent_per_sqm = payload[:rent_per_sqm]
      @rented_surface = payload[:rented_surface]
  
      @monthly_savings = payload[:monthly_savings]
      @housing_tax = payload[:housing_tax]
      @agency_fees = payload[:agency_fees]
  
      @inflation_rate = payload[:inflation_rate]
      @rent_growth_rate = payload[:rent_growth_rate]
      @savings_return_rate = payload[:savings_return_rate]
      @home_price_growth_rate = payload[:home_price_growth_rate]
    end
  
    def call
      {
        income: @income,
        contribution: @contribution,
        zipcode: @zipcode,
        price_per_sqm: @price_per_sqm,
        purchase_surface: @purchase_surface,
  
        mortgage_rate: @mortgage_rate,
        mortgage_duration: @mortgage_duration,
        insurance_rate: @insurance_rate,
  
        land_tax: @land_tax,
        notary_fees: @notary_fees,
        guaranty_fees: @guaranty_fees,
        property_charges: @property_charges,
  
        rent_per_sqm: @rent_per_sqm,
        rented_surface: @rented_surface,
  
        monthly_savings: @monthly_savings,
        housing_tax: @housing_tax,
        agency_fees: @agency_fees,
  
        inflation_rate: @inflation_rate,
        rent_growth_rate: @rent_growth_rate,
        savings_return_rate: @savings_return_rate,
        home_price_growth_rate: @home_price_growth_rate,
        facts: {
          price: price,
          rent: rent,
          payment: payment,
          equilibrium: equilibrium,
          costs: costs
        }
      }
    end
  
    private
  
    def rent
      @rent_per_sqm * @rented_surface
    end
  
    def payment
      principal * (rate / (1 - (1 + rate) ** (-@mortgage_duration*12)))
    end


    def principal
      @_principal ||= price - @contribution + @guaranty_fees + @notary_fees
    end

    def rate
      @_rate ||= @mortgage_rate / 1200
    end

    def price
      @_price ||= @price_per_sqm * @purchase_surface
    end

    def rate
      @_rate = @mortgage_rate / 1200
    end

    def monthlty_insurance_rate
      @_rate = @insurance_rate / 1200
    end

    def remaining_principal(duration)
      ((payment * rate / (rate + monthlty_insurance_rate * (1 - (1+rate)**-monthlty_insurance_rate))) * (1 - (1 + rate)**-((@mortgage_duration-duration)*12))) / rate
    end

    def costs
      @_costs ||= (1..25).map do |duration|
        {
          rent: {
            final_savings: - rent_final_savings(duration).to_i,
            initial_costs: @agency_fees.to_i,
            recuring_costs: (duration * 12 * rent + duration * @housing_tax).to_i
          },
          purchase: {
            final_savings: - (price * (1 + @home_price_growth_rate/100)**(duration-1) - remaining_principal(duration)).to_i,
            initial_costs: (@guaranty_fees + @notary_fees).to_i,
            recuring_costs: ((payment * 12 + @property_charges + @land_tax) * duration).to_i
          }
        }
      end
    end

    def equilibrium
      costs.each_with_index do |d, i|
        next if d[:rent].values.sum < d[:purchase].values.sum
        return i + 1
      end
      25
    end

    def rent_final_savings(duration)
      @contribution * (1 + @savings_return_rate/100)**duration + @monthly_savings * (1..duration-1).sum do |k|
        (1 - (@savings_return_rate/100)**k)/(1 - @savings_return_rate/100)
      end
    end

  end
end
