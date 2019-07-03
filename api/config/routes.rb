Rails.application.routes.draw do
  post "/initialize", to: "results#init"
  post "/sharpen", to: "results#sharpen"
end
