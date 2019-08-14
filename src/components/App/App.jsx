import React, { Component } from "react";
import MenuButton from "COMPONENTS/MenuButton/";
import "SHARED/global.scss";
import "SHARED/reset.scss";
import { s } from "./";


export default class App extends Component {

	render(){
		return(
			<div className={s.wrapper}>
				<MenuButton />
			</div>
		);
	}//render
}//App