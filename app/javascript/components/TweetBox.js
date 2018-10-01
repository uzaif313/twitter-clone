import React from 'react'
class TweetBox extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<form className="form">
      		<div className='input-field'>
	      		<textarea className="materialize-textarea"/>
	      		<label>What's happening</label>
	      		<button className="btn right">Tweet</button>
      		</div>
      	</form>
      </React.Fragment>
    );
  }
}

export default TweetBox
