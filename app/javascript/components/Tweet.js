import React from "react"
import PropTypes from "prop-types"
class Tweet extends React.Component {
  render () {
  	
    return (
      <React.Fragment>
				<li className="collection-item avatar">
		      <i className="material-icons circle">person_pin</i>
		      <span className="title">{this.props.body}</span>
		      	<p>{this.props.author} <br/>
		      </p>
		      <a href="#!" className="secondary-content">
		      	<i className="material-icons">grade</i>
		      </a>
    		</li>
      </React.Fragment>
    );
  }
}

export default Tweet
