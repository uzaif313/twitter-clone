import React from "react"
import PropTypes from "prop-types"
import Tweet from './Tweet'

class TweetList extends React.Component {
  render () {
  	console.log(this.props)
    const tweet = this.props.tweets.map((tweet)=><Tweet key={tweet.id} {...tweet}/>)
    return (
      <React.Fragment>
      <ul className="collection">
      	 {tweet}
      </ul>
      </React.Fragment>
    );
  }
}

export default TweetList
