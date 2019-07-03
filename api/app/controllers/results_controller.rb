require "compute_results"

class ResultsController < ApplicationController

  skip_before_action :verify_authenticity_token

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

  def execute
    request_params =
      validate_params do
        required(:income).value(:int?)
        required(:contribution).value(:int?)
        required(:zipcode).value(:str?)
      end
    render json: ComputeResults.call(request_params)
  end

  private

  def validate_params(schema = nil, &block)
    schema ||= Dry::Validation.JSON(&block)
    res = schema.call(params.to_unsafe_h)
    fail(InvalidParameters, res.errors) if res.failure?
    res.to_h.deep_symbolize_keys
  end

end
