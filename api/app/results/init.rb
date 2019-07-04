module Results
  class Init

    INFLATION_RATE = 1.0
    RENT_GROWTH_RATE = 1.0
    HOME_PRICE_GROWTH_RATE = 3.0
    SAVINGS_RETURN_RATE = 1.0
    MORTGAGE_RATE = 1.5
    MORTGAGE_DURATION = 25
    INSURANCE_RATE = 0.2

    def self.call(payload)
      new(payload).call
    end

    def initialize(payload)
      @income = payload[:income]
      @contribution = payload[:contribution]
      @zipcode = payload[:zipcode]
    end

    def call
      {
        income: @income,
        contribution: @contribution,
        zipcode: @zipcode,
        price_per_sqm: price_per_sqm.to_i,
        purchase_surface: purchase_surface.to_i,

        mortgage_rate: MORTGAGE_RATE,
        mortgage_duration: MORTGAGE_DURATION,
        insurance_rate: INSURANCE_RATE,

        land_tax: land_tax.to_i,
        notary_fees: notary_fees.to_i,
        guaranty_fees: guaranty_fees.to_i,
        property_charges: property_charges.to_i,

        rent_per_sqm: rent_per_sqm.to_i,
        rented_surface: purchase_surface.to_i,

        monthly_savings: monthly_savings.to_i,
        housing_tax: housing_tax.to_i,
        agency_fees: agency_fees.to_i,

        inflation_rate: INFLATION_RATE,
        rent_growth_rate: RENT_GROWTH_RATE,
        savings_return_rate: SAVINGS_RETURN_RATE,
        home_price_growth_rate: HOME_PRICE_GROWTH_RATE,
        facts: {
          price: price.to_i,
          rent: rent.to_i,
          payment: payment.to_i,
          equilibrium: equilibrium,
          costs: costs
        }
      }
    end

    private

    def rent
      rent_per_sqm * purchase_surface
    end

    def monthly_savings
      payment - rent
    end

    def price
      @_price ||= (principal - guaranty_fees + @contribution) / 1.08
    end

    def payment
      @_payment ||= 0.33 * @income / 12
    end

    def price_per_sqm
      YAML.load(File.read("app/config/purchase_price_sqm.yml"))[department]
    end

    def rent_per_sqm
      @_rent_per_sqm ||= YAML.load(File.read("app/config/rent_price_sqm.yml"))[department]
    end

    def land_tax
      ponderation = 1
      abattement = 0.5
      YAML.load(File.read("app/config/land_tax.yml"))[department] * ponderation * abattement * purchase_surface * rent_per_sqm * 12/100
    end

    def notary_fees
      @_notary_fees ||= price * 0.08
    end

    def guaranty_fees
      @_guaranty_fees ||= principal * 0.01
    end

    def property_charges
      purchase_surface * (department == "75" ? 40 : 23)
    end

    def housing_tax
      YAML.load(File.read("app/config/housing_tax.yml"))[department] * purchase_surface
    end

    def purchase_surface
      price / price_per_sqm
    end

    def department
      @_department ||= @zipcode[0..1] == "97" ? @zipcode[0..2] : @zipcode[0..1]
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
      rent
    end

    def costs
      @_costs ||= (1..25).map do |duration|
        {
          rent: {
            final_savings: - rent_final_savings(duration).to_i,
            initial_costs: agency_fees.to_i,
            recuring_costs: (duration * 12 * rent + duration * housing_tax).to_i
          },
          purchase: {
            final_savings: - (price * (1 + HOME_PRICE_GROWTH_RATE/100)**(duration-1) - remaining_principal(duration)).to_i,
            initial_costs: (guaranty_fees + notary_fees).to_i,
            recuring_costs: ((payment * 12 + property_charges + land_tax) * duration).to_i
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
      @contribution * (1 + SAVINGS_RETURN_RATE/100)**duration + monthly_savings * (1..duration-1).sum do |k|
        (1 - (SAVINGS_RETURN_RATE/100)**k)/(1 - SAVINGS_RETURN_RATE/100)
      end
    end

  end
end

