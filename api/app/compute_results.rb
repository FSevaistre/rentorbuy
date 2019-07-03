class ComputeResults
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
      price_per_sqm: price_per_sqm,
      purchase_surface: purchase_surface,

      mortgage_rate: mortgage_rate,
      mortgage_duration: mortgage_duration,
      insurance_rate: insurance_rate,

      land_tax: land_tax,
      notary_fees: notary_fees,
      guaranty_fees: guaranty_fees,
      property_charges: property_charges,

      rent_per_sqm: rent_per_sqm,
      rented_surface: rented_surface,

      monthly_savings: monthly_savings,
      housing_tax: housing_tax,
      agency_fees: agency_fees,

      inflation_rate: inflation_rate,
      rent_growth_rate: rent_growth_rate,
      savings_return_rate: savings_return_rate,
      home_price_growth_rate: home_price_growth_rate,
      facts: {
      }
    }
  end

  private

  def price_per_sqm
    @price_per_sqm
  end

  def purchase_surface
    @purchase_surface
  end

  def mortgage_rate
    @mortgage_rate
  end

  def mortgage_duration
    @mortgage_duration || 25
  end

  def insurance_rate
    @insurance_rate || 0.36
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

  def rent_per_sqm
    @rent_per_sqm
  end

  def rented_surface
    @rented_surface
  end

  def monthly_savings
    @monthly_savings
  end

  def housing_tax
    @housing_tax
  end

  def agency_fees
    @agency_fees
  end

  def inflation_rate
    @inflation_rate || 1.2
  end

  def rent_growth_rate
    @rent_growth_rate || 1.05
  end

  def savings_return_rate
    @savings_return_rate || 1.5
  end

  def home_price_growth_rate
    @home_price_growth_rate || 1.1
  end
end
