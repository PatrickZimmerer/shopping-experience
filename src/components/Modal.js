import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
	const titles = props.titles;
	const prices = props.prices;
	const amounts = props.amounts;
	function cancelHandler() {
		props.onCancel();
	}
	function deleteItem(i) {
		console.log("selcected", i);
		titles.splice(i, 1);
		prices.splice(i, 1);
		amounts.splice(i, 1);
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
							<p>= {sum.toFixed(2).replace(".", ",")} €</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Modal;
