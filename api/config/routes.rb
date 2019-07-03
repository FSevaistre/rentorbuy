Rails.application.routes.draw do
  post "/results", to: "results#execute"
end
