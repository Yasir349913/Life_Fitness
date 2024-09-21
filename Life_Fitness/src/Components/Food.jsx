import Item from "./Item";
const Food = ({ fooditems }) => {
    return (
        <ul className="list-group">
            {fooditems.map((item, index) => (
                <Item 
                    key={index} // Ideally, use a unique ID if available
                    foodItem={item} 
                    bought={true}
                    handleBuyButtonClick={() => console.log(`${item} bought`)} 
                />
            ))}
        </ul>
    );
};

export default Food;