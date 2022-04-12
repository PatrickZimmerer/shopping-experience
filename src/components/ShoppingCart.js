import React from "react";
import classes from "./ShoppingCart.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

let sum = 0;
function ShoppingCart(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [state, setState] = useState(0);

	function openShoppingModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	/**
	 * Legt den hitCounter für shopping cart fest
	 */
	setInterval(() => {
		const amounts = props.amounts;
		if (amounts.length > 0) {
			sum = amounts.reduce((x, y) => x + y);
		} else {
			sum = 0;
		}
		setState(sum);
	}, 1000 / 30);

	return (
		<div>
			<div className={classes.cartWrap} onClick={openShoppingModal}>
				<p className={classes.amountCounter}>{state}</p>
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
