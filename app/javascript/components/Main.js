import React from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'
const mockTweet =[
	{id:1,body:"Body 1",author:"Uzaif Nilger"},
	{id:2,body:"Body 2",author:"Uzaif Nilger"},
	{id:3,body:"Body 3",author:"Uzaif Nilger"},
	{id:4,body:"Body 4",author:"Uzaif Nilger"}
]
class Main extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			tweetList:[]
		}
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
