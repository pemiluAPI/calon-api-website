class CandidatesController < ApplicationController
  def index
    @response = HTTParty.get('http://pemiluapi.local/candidate/api/candidates?apiKey=09c7672eb7791ec697dfe079450afa59')
  end
end
