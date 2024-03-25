class ApplicationController < ActionController::Base
  before_action :redirect_root_domain

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end

  private

  def redirect_root_domain
    return unless request.host == 'wattivet.fr'

    redirect_to("#{request.protocol}www.wattivet.fr#{request.fullpath}", status: 301)
  end
end
