class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def nothing
    render json: { ok: :ok }
  end
end
