import React from "react"
import PropTypes from "prop-types"
class Tweet extends React.Component {
  render () {
  	
    return (
      <React.Fragment>
				<li className="collection-item avatar">
		      <img className='circle' src={this.props.gravatar}/>
		      <span className="title">{this.props.display_name}</span>
		      	<p>{this.props.body}</p>
		      	<time>{this.props.formatedDate}</time>
		      <a href="#!" className="secondary-content">
		      	<i className="material-icons">grade</i>
		      </a>
    		</li>
      </React.Fragment>
    );
  }
}

export default Tweet
