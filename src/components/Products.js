import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function Products() {
	function addToCart(product) {
		let i = titles.indexOf(product.title);
		if (i === -1) {
			titles.push(product.title);
			prices.push(product.price);
			images.push(product.image);
			amounts.push(1);
		} else {
			amounts[i]++;
		}
		save();
	}
	function save() {
		let titlesAsText = JSON.stringify(titles);
		let imagesAsText = JSON.stringify(images);
		let pricesAsText = JSON.stringify(prices);
		let amountsAsText = JSON.stringify(amounts);
		localStorage.setItem("titles", titlesAsText);
		localStorage.setItem("images", imagesAsText);
		localStorage.setItem("prices", pricesAsText);
		localStorage.setItem("amounts", amountsAsText);
	}
	function load() {
		let titlesAsText = localStorage.getItem("titles");
		let imagesAsText = localStorage.getItem("images");
		let pricesAsText = localStorage.getItem("prices");
		let amountsAsText = localStorage.getItem("amounts");
		if (titlesAsText) {
			titles = JSON.parse(titlesAsText);
			images = JSON.parse(imagesAsText);
			prices = JSON.parse(pricesAsText);
			amounts = JSON.parse(amountsAsText);
		}
		console.log(titles, images, amounts);
	}
	let titles = [];
	let prices = [];
	let amounts = [];
	let images = [];

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	load();
	useEffect(() => {
		setLoading(true);
		axios({
			method: "GET",
			url: "https://fakestoreapi.com/products",
		})
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => alert(error, "occured please try again later"))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className={classes.productsWrap}>
			{loading && (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
			{data.map((product) => (
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
