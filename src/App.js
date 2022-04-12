import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	let titles = [];
	let prices = [];
	let amounts = [];
	let images = [];
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	/**
	 * useEffect fetcht die daten in form eines JSON von der API
	 */
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

	/**
	 * lädt die im localstorage gespeicherten Arrays falls vorhanden
	 */
	function loadLocalStorage() {
		let titlesAsText = localStorage.getItem("titles");
		let pricesAsText = localStorage.getItem("prices");
		let amountsAsText = localStorage.getItem("amounts");
		if (titlesAsText) {
			titles = JSON.parse(titlesAsText);
			prices = JSON.parse(pricesAsText);
			amounts = JSON.parse(amountsAsText);
		}
	}
	loadLocalStorage();
	return (
		<div className="App">
			<Header />
			<Products
				titles={titles}
				images={images}
				prices={prices}
				amounts={amounts}
				loading={loading}
				setData={data}
			/>

			<ShoppingCart titles={titles} prices={prices} amounts={amounts} />
			<Footer />
		</div>
	);
}

export default App;
