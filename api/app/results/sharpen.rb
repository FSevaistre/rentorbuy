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

    def costs
      (0..24).map do |duration|
        {
          rent: {
            final_savings: 0,
            initial_costs: 0,
            recuring_costs: 0
          },
          purchase: {
            final_savings: 0,
            initial_costs: 0,
            recuring_costs: 0
          }
        }
      end
    end
  
    def equilibrium
    end

    def principal
      @_principal ||= price - @contribution + @guaranty_fees + @notary_fees
    end

    def rate
      @_rate ||= @mortgage_rate / 1200
    end

  end  
end
