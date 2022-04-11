import React from "react";
import classes from "./ShoppingCart.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart() {
	let [modalIsOpen, setModalIsOpen] = useState(false);

	function openShoppingModal() {
		setModalIsOpen(true);
		console.log(modalIsOpen);
	}

	function closeModal() {
		setModalIsOpen(false);
		console.log(modalIsOpen);
	}

	return (
		<div>
			<div className={classes.cartWrap} onClick={openShoppingModal}>
				<p className={classes.amountCounter}>7</p>
				<FontAwesomeIcon icon={faShoppingCart} className={classes.icon}></FontAwesomeIcon>
			</div>
			<div>
				{modalIsOpen && <Modal onCancel={closeModal} />}
				{modalIsOpen && <Backdrop onClick={closeModal} />}
			</div>
		</div>
	);
}

export default ShoppingCart;
