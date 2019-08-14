import React, { Component } from "react";
import { s } from "./";

export default class MenuButton extends Component {

	constructor(...args){
		super(...args);

		//scope binding
		this.toggleOpen = this.toggleOpen.bind(this);

		//initialise state
		this.state = {
			open: false
		};
	}//constructor

	toggleOpen(){
		this.setState({
			open: !this.state.open
		});
	}//toggleOpen

	render(){

		const { open } = this.state;
		return(
			<div 
				className={`${s.wrapper} ${open ? s.active : s.inactive}`}
			>
				<input 
					id="menu-button"
					className={`${s.checkbox}`}
					type="checkbox"
					onChange={this.toggleOpen}
				/>
				<label 
					className={`${s.container}`}
					htmlFor="menu-button"
				>
					<span className={`${s.hamburger}`}>
						<span className={`${s.bar}`}></span>
						<span className={`${s.bar}`}></span>
						<span className={`${s.bar}`}></span>
					</span>
					<span 
						className={`${s.label} ${s.close}`}
						aria-hidden="true"
					>
						Close
					</span>
					<span className={`${s.label} ${s.open}`}>
						Boy, you need a label.
					</span>
				</label>
			</div>
		);
	}//render

}//MenuButton