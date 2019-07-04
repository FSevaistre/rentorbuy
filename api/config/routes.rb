Rails.application.routes.draw do
  post "/initialize", to: "results#init"
  post "/sharpen", to: "results#sharpen"

  match '(:anything)' => 'application#nothing', via: [:options]
end
