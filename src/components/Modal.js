import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Modal(props) {
	function cancelHandler() {
		props.onCancel();
	}
	return (
		<div className={classes.modal}>
			<div className={classes.exit}>
				<FontAwesomeIcon icon={faTimes} onClick={cancelHandler}></FontAwesomeIcon>
			</div>
			<h1>Your Shopping Cart:</h1>
			<div>Items Here</div>
		</div>
	);
}

export default Modal;
