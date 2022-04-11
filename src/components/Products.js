import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import axios from "axios";
function Products() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios({
			method: "GET",
			url: "https://fakestoreapi.com/products",
		})
			.then((response) => {
				console.log("response is", response.data);
				setData(response.data);
			})
			.catch((error) => console.log("an error ooccured", error))
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
				<div key={product.id} className={classes.productContainer}>
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
