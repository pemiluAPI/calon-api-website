class CandidatesController < ApplicationController
  def index
    @response = HTTParty.get("#{Rails.configuration.pemilu_api_endpoint}/api/caleg?apiKey=#{Rails.configuration.pemilu_api_key}", timeout: 500)
  end

  def show
    response = HTTParty.get("#{Rails.configuration.pemilu_api_endpoint}/api/caleg/#{params[:id]}?apiKey=#{Rails.configuration.pemilu_api_key}")
    @caleg = response.parsed_response['data']['results']['caleg'].first
  end
end
