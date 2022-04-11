import React from "react";
import classes from "./ShoppingCart.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart(props) {
	let [modalIsOpen, setModalIsOpen] = useState(false);

	const amounts = props.amounts;
	console.log(amounts);
	if (amounts.length > 0) {
		var sum = amounts.reduce((x, y) => x + y);
		console.log(sum);
	} else {
		sum = 0;
	}

	function openShoppingModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	return (
		<div>
			<div className={classes.cartWrap} onClick={openShoppingModal}>
				<p className={classes.amountCounter}>{sum}</p>
				<FontAwesomeIcon icon={faShoppingCart} className={classes.icon}></FontAwesomeIcon>
			</div>
			<div>
				{modalIsOpen && (
					<Modal
						titles={props.titles}
						prices={props.prices}
						amounts={props.amounts}
						onCancel={closeModal}
					/>
				)}
				{modalIsOpen && <Backdrop onClick={closeModal} />}
			</div>
		</div>
	);
}

export default ShoppingCart;
