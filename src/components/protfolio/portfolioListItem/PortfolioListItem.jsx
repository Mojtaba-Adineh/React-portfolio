import React from 'react';
import "./portfolioListItem.scss"

const PortfolioListItem = ({id , title, selected , setSelected}) => {
    return (
        <li className={selected === id ? "active" : null} onClick={() => setSelected(id)}>{title}</li>
    );
};

export default PortfolioListItem;