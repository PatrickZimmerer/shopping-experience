import classes from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Products(props) {
	/**
	 * addet das jeweils geklickte produkt in das Shoppingcart array,
	 * wenn schon vorhanden erhöht es die Anzahl um 1
	 * @param {product} product ist ein Objekt aus dem Array aller produkte
	 */
	function addToCart(product) {
		let i = props.titles.indexOf(product.title);
		if (i === -1) {
			props.titles.push(product.title);
			props.prices.push(product.price);
			props.images.push(product.image);
			props.amounts.push(1);
		} else {
			props.amounts[i]++;
		}
		save();
	}

	/**
	 * @param {string} str jeglicher String
	 * @returns den String mit dem ersten Buchstaben groß geschrieben
	 */
	function FirstCapitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	/**
	 * Speichert die Arrays im local storage
	 */
	function save() {
		let titlesAsText = JSON.stringify(props.titles);
		let pricesAsText = JSON.stringify(props.prices);
		let amountsAsText = JSON.stringify(props.amounts);
		localStorage.setItem("titles", titlesAsText);
		localStorage.setItem("prices", pricesAsText);
		localStorage.setItem("amounts", amountsAsText);
	}

	return (
		<div className={classes.productsWrap}>
			{props.loading && (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
			{props.setData.map((product) => (
				<div
					onClick={() => addToCart(product)}
					key={product.id}
					className={classes.productContainer}
				>
					<div className={classes.add}>
						<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
					</div>
					<div>
						<img src={product.image} alt="" />
					</div>
					<div>
						<h3 className={classes.title}>{product.title}</h3>
						<span className={classes.price}>
							<b>Price: {product.price.toFixed(2).replace(".", ",")} €</b>
						</span>
						<span className={classes.description}>{FirstCapitalize(product.description)}</span>
					</div>
				</div>
			))}
		</div>
	);
}
export default Products;
