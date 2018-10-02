import React from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'
import api from '../helpers/api'
class Main extends React.Component {
	constructor(props){
		console.log(api)
		super(props)
		this.state = {
			tweetList:[]
		}
	}

	componentDidMount(){

		api.tweets.list().then((data)=>{this.setState({tweetList:data.data})})
	}

	addTweet(val){
		let tweets = this.state.tweetList;
		tweets.unshift({id:Date.now(), body:val, author: 'Guest'})
		this.setState({tweetList:tweets})
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
