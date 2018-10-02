import React from 'react'
class TweetBox extends React.Component {
	sendTweet(event){
		event.preventDefault();
		this.props.sendTweet(this.refs.tweet.value)
		this.refs.tweet.value = ''
	}
  render () {
    return (
      <React.Fragment>
	      <div className="row">
	      	<form onSubmit={this.sendTweet.bind(this)}>
	      		<div className='input-field'>
		      		<textarea ref="tweet" className="materialize-textarea"/>
		      		<label>What's happening</label>
		      		<button type="submit" className="btn right">Tweet</button>
	      		</div>
	      	</form>
	     	</div>
      </React.Fragment>
    );
  }
}

export default TweetBox
