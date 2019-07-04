require "results"

class ResultsController < ApplicationController

  class InvalidParameters < StandardError
    def initialize(errors, message = nil)
      @message = message
      @errors = errors
    end

    attr_reader :errors

    def message
      @message || "Invalid parameters : #{errors}"
    end
  end

  def init
    puts params
    init_params = validate_params do
      required(:income).value(:int?)
      required(:contribution).value(:int?)
      required(:zipcode).value(:str?)
    end
    render json: Results.init(init_params)
  end

  def sharpen
    shrapen_params = validate_params do
      required(:income).value(:int?)
      required(:contribution).value(:int?)
      required(:zipcode).value(:str?)

      required(:price_per_sqm).value(:int?)
      required(:purchase_surface).value(:int?)

      required(:mortgage_rate).value(:number?)
      required(:mortgage_duration).value(:int?)
      required(:insurance_rate).value(:number?)

      required(:land_tax).value(:int?)
      required(:notary_fees).value(:int?)
      required(:guaranty_fees).value(:int?)
      required(:property_charges).value(:int?)

      required(:rent_per_sqm).value(:int?)
      required(:rented_surface).value(:int?)

      required(:monthly_savings).value(:int?)
      required(:housing_tax).value(:int?)
      required(:agency_fees).value(:int?)

      required(:inflation_rate).value(:number?)
      required(:rent_growth_rate).value(:number?)
      required(:savings_return_rate).value(:number?)
      required(:home_price_growth_rate).value(:number?)
    end
    render json: Results.sharpen(shrapen_params)
  end

  private

  def validate_params(schema = nil, &block)
    schema ||= Dry::Validation.JSON(&block)
    res = schema.call(params.to_unsafe_h)
    fail(InvalidParameters, res.errors) if res.failure?
    res.to_h.deep_symbolize_keys
  end

end
