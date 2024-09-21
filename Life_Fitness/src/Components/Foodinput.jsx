import styles from "./Foodinput.module.css"
const Foodinput=({handleonKeyDown})=>{
return(
    <>
    <input type="text" placeholder="Enter food"className={styles.input} onKeyDown={handleonKeyDown}/>
    </>
)
}
export default Foodinput;