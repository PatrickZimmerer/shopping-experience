import classes from "./Backdrop.module.css";
function Backdrop(props) {
	return <div className={classes.backDrop} onClick={props.onClick}></div>;
}
export default Backdrop;
