import React, { Component } from 'react';

export class Landing extends Component {
	render() {
		return (
			<div className="showcase-container">
				<header className="main-header">
					<div className="row">
						<div className="col s12 m12 center">
							<h4>What Do You Bastards Want?</h4>
							<br />
							<br />

							<input
								className="btnFriends"
								type="submit"
								src="../../../public/dist/Images/FriendsSpeechBubble.png"
								onClick="Redirect to '/Create'"
							/>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Landing;
