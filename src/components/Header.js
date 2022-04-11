import classes from "./Header.module.css";
function Header() {
	return (
		<div className={classes.header}>
			<h1>ShoppingExperience</h1>
			<div className={classes.links}>
				<p>Home</p>
				<p>Cart</p>
			</div>
		</div>
	);
}
export default Header;
