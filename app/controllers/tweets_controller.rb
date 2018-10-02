class TweetsController < ApplicationController
	skip_before_action :verify_authenticity_token, only: [:create, :index]	
	def index 
		render json:Tweet.includes(:user).all.order(created_at: :desc)
	end

	def create
		@tweet = current_user.tweets.create(tweet_params)
		render json:@tweet
	end

	private
		def tweet_params
			params.permit(:body)
		end

end
