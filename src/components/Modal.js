import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Modal(props) {
	const titles = props.titles;
	const prices = props.prices;
	const amounts = props.amounts;

	const [state, setState] = useState([]);

	function cancelHandler() {
		props.onCancel();
	}
	/**
	 * löscht Produkt an der stelle i aus dem array.
	 * @param {number} i gibt uns die stelle des geklickten produktes im cart
	 */
	function deleteItem(i) {
		titles.splice(i, 1);
		prices.splice(i, 1);
		amounts.splice(i, 1);
		setState((arr) => arr - 1);
		save();
	}

	function save() {
		let titlesAsText = JSON.stringify(props.titles);
		let pricesAsText = JSON.stringify(props.prices);
		let amountsAsText = JSON.stringify(props.amounts);
		localStorage.setItem("titles", titlesAsText);
		localStorage.setItem("prices", pricesAsText);
		localStorage.setItem("amounts", amountsAsText);
	}
	return (
		<div className={classes.modal}>
			<div className={classes.exit}>
				<FontAwesomeIcon icon={faTimes} onClick={cancelHandler}></FontAwesomeIcon>
			</div>
			<h1>Your Shopping Cart:</h1>
			<div>
				{titles.map((title, i, sum) => {
					sum = amounts[i] * prices[i];
					return (
						<div className={classes.shoppingCartItemContainer} key={i}>
							<FontAwesomeIcon
								className={classes.deleteIcon}
								key={i}
								icon={faTrash}
								onClick={() => deleteItem(i)}
							></FontAwesomeIcon>
							<p>{title}</p>
							<p>{amounts[i]}x</p>
							<p>{prices[i].toFixed(2).replace(".", ",")} €</p>
							<p>
								<b>{sum.toFixed(2).replace(".", ",")} €</b>
							</p>
						</div>
					);
				})}
			</div>
			<div></div>
		</div>
	);
}

export default Modal;
