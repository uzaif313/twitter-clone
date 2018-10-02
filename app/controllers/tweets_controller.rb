class TweetsController < ApplicationController
	
	def index 
		render json:Tweet.joins(:user).select("body, concat(users.firstname,' ',users.lastname) as author")
	end

	def create
		@tweet = current_user.tweets.build(tweet_params)
		render json:@tweet
	end

	private
		def tweet_params
			params[:tweet].permit(:body)
		end

end
