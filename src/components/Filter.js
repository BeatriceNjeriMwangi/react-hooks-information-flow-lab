import react from 'react';
//import ShoppingList from './ShoppingList';

function Filter({onCategoryChange}){
    return(
        <div className="filter">
            <h2>Shopster</h2>
            <select name='filter' onChange={onCategoryChange}>
                <option value="Dairy">Dairy</option>
                <option value="Frozen">Frozen</option>
                <option value="Meat">Meat</option>
                <option value="Seafood">Seafood</option>
            </select>
        </div>
    )
}
export default Filter;