import React, { Component } from "react";
import "SHARED/global.scss";
import "SHARED/reset.scss";
import { s } from "./";


export default class App extends Component {

	render(){
		return(
			<p className={s.wrapper}>
				This is a test from App.
			</p>
		);
	}//render
}//App