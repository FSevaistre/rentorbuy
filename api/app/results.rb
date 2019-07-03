require 'results/sharpen'
require 'results/init'

module Results
  class << self

    def init(payload)
      Results::Init.call(payload)
    end

    def sharpen(payload)
      Results::Sharpen.call(payload)
    end

  end
end
