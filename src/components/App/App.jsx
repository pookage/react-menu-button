import React, { Component } from "react";
import MenuButton from "COMPONENTS/MenuButton/";
import { s } from "./";


export default class App extends Component {

	render(){
		return(
			<div className={s.wrapper}>
				<MenuButton>
					Monkey Menu
				</MenuButton>
			</div>
		);
	}//render
}//App