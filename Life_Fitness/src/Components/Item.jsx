import styles from "./Button.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClick }) => {
    return (
        <li>
            {foodItem}
            <button 
                type="button" 
                className={`${styles.button} `}
                onClick={handleBuyButtonClick}
            >
                Buy
            </button>
        </li>
    );
};

export default Item;