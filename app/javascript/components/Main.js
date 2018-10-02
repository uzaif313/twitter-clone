import React from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'
import api from '../helpers/api'
import Moment from 'moment';
class Main extends React.Component {
	constructor(props){
		console.log(api)
		super(props)
		this.state = {
			tweetList:[]
		}
	}

	componentDidMount(){
		api.tweets.list()
							.then((data)=>{
								this.setState(this.formattedTweets(data.data))
							})

	}

	formattedTweets(tweetList){
		const formattedTweets = tweetList.map((tweet)=>{
			tweet.formatedDate = new Moment(tweet.created_at).fromNow()
			return tweet
		})
		return {
			tweetList:formattedTweets
		}
	}

	addTweet(val){
		 api.tweets.create({'body':val}).then((newTweet)=>{
			let tweets = this.state.tweetList;
			tweets.unshift(newTweet.data)
			this.setState(this.formattedTweets(tweets))
		 }) 
	}
  render () {
    return (
      <div className="container">
      	<TweetBox sendTweet={this.addTweet.bind(this)}/>
      	<TweetList tweets={this.state.tweetList}/>
      </div>
    );
  }
}

export default Main
