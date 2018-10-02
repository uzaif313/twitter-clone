import React from "react"
import PropTypes from "prop-types"
import Tweet from './Tweet'
// import api from './api'
class TweetList extends React.Component {
  render () {
  	// console.log(api)
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
