class CandidatesController < ApplicationController
  def index
    @response = HTTParty.get("#{Rails.configuration.pemilu_api_endpoint}/api/candidates?apiKey=#{Rails.configuration.pemilu_api_key}")
  end

  def show
    response = HTTParty.get("#{Rails.configuration.pemilu_api_endpoint}/api/candidates/#{params[:id]}?apiKey=#{Rails.configuration.pemilu_api_key}")
    @candidate = response.parsed_response['data']['results']['candidates'].first
  end
end
