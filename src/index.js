import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<App />,
		document.getElementById("app")
	);
}//init