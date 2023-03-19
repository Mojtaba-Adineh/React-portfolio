import React from 'react';
import "./topbar.scss"
import { Person , Mail } from '@material-ui/icons';

const TopBar = ({menuOpen , setMenuOpen}) => {
    return (
        <div className={menuOpen ? "topbar active" : "topbar" }>
            <div className="wrapper">
                <div className="left">
                    <a className='logo' href="#intro">React Developer</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>0901 9492 860</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>codewithmoji@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;