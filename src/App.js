import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	return (
		<div className="App">
			<Header />
			<Products />
			<ShoppingCart />
			<Footer />
		</div>
	);
}

export default App;
