import React from "react";

let styles = require('./style.scss');

export default class HomePage extends React.Component {
	componentDidMount () {
  		console.log(styles);
	}

	render () {
		return (
			<div className={styles.content}>
				<h1>Food porn</h1>
				<p className={styles.welcometeText}>Thanks for joining!</p>
			</div>
		);
	}
}
