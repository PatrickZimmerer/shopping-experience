import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const titles = [];
	const prices = [];
	const amounts = [];
	const images = [];
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios({
			method: "GET",
			url: "https://fakestoreapi.com/products",
		})
			.then((response) => {
				setData(response.data);
				console.log(data);
			})
			.catch((error) => alert(error, "occured please try again later"))
			.finally(() => setLoading(false));
	}, []);
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
