import classes from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function Products(props) {
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
		// console.log(props.titles, props.amounts);
		save();
	}
	function save() {
		let titlesAsText = JSON.stringify(props.titles);
		let imagesAsText = JSON.stringify(props.images);
		let pricesAsText = JSON.stringify(props.prices);
		let amountsAsText = JSON.stringify(props.amounts);
		localStorage.setItem("titles", titlesAsText);
		localStorage.setItem("images", imagesAsText);
		localStorage.setItem("prices", pricesAsText);
		localStorage.setItem("amounts", amountsAsText);
	}
	// function load() {
	// 	let titlesAsText = localStorage.getItem("titles");
	// 	let imagesAsText = localStorage.getItem("images");
	// 	let pricesAsText = localStorage.getItem("prices");
	// 	let amountsAsText = localStorage.getItem("amounts");
	// 	if (titlesAsText) {
	// 		props.titles = JSON.parse(titlesAsText);
	// 		props.images = JSON.parse(imagesAsText);
	// 		props.prices = JSON.parse(pricesAsText);
	// 		props.amounts = JSON.parse(amountsAsText);
	// 	}
	// load();
	// 	// 	console.log(titles, images, amounts);
	// }
	// let titles = [];
	// let prices = [];
	// let amounts = [];
	// let images = [];

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
						<img src={product.image} />
					</div>
					<div>
						<h3 className={classes.title}>{product.title}</h3>
						<span className={classes.price}>
							<b>Price: {product.price.toFixed(2).replace(".", ",")} €</b>
						</span>
						<span className={classes.description}>
							<b>Description:</b> {product.description}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
export default Products;
