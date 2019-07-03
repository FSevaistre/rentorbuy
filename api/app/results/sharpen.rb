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
  
    def price
      @price_per_sqm * @purchase_surface
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

    def monthly_savings
      payment - rent
    end

    def price
      @_price ||= @price_per_sqm * @purchase_surface
    end

    def price_per_sqm
      @price_per_sqm
    end

    def rent_per_sqm
      @_rent_per_sqm
    end

    def land_tax
      @land_tax
    end

    def notary_fees
      @notary_fees
    end

    def guaranty_fees
      @guaranty_fees
    end

    def property_charges
      @property_charges
    end

    def housing_tax
      @housing_tax
    end

    def rate
      @_rate = MORTGAGE_RATE / 1200
    end

    def insurance_rate
      @_rate = INSURANCE_RATE / 1200
    end

    def principal
      @_principal ||= ((payment * rate / (rate + insurance_rate * (1 - (1+rate)**-insurance_rate))) * (1 - (1 + rate)**-(MORTGAGE_DURATION*12))) / rate
    end

    def remaining_principal(duration)
      ((payment * rate / (rate + insurance_rate * (1 - (1+rate)**-insurance_rate))) * (1 - (1 + rate)**-((MORTGAGE_DURATION-duration)*12))) / rate
    end

    def agency_fees
      @agency_fees
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
            final_savings: - (price * (1 + HOME_PRICE_GROWTH_RATE/100)**(duration-1) - remaining_principal(duration)).to_i,
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
      nil
    end

    def rent_final_savings(duration)
      @contribution * (1 + SAVINGS_RETURN_RATE/100)**duration + monthly_savings * (1..duration-1).sum do |k|
        (1 - (SAVINGS_RETURN_RATE/100)**k)/(1 - SAVINGS_RETURN_RATE/100)
      end
    end

  end
end
