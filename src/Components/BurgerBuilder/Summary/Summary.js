import React from 'react';

const Summary = props => {
    const ingredientSumarry = props.ingredients.map(item => {
        return (
            <li key={item.type}>
                <span style={{ textTransform: "capitalize" }}>{item.type}</span>: {item.amount}

            </li>
        )
    })
    return (
        <div>
            <ul>
                {ingredientSumarry}
            </ul>
        </div>
    );
};

export default Summary;