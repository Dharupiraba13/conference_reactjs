import React from 'react';
import logo from '../../src/img2.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            
            <nav align="right">
                <Link to="/Contact">Contact</Link>
                <Link to="/Registration">Registration</Link> 
                <Link to="/Papers">Call for Papers</Link> 
            </nav>
            <div style={{paddingRight:"1400px"}}>
            <Link to="/"><img src={logo} alt="logo" height="75px" width="75px" align="left"/></Link>
            </div>
           
            <br/><br/>
        </div>
    );
}

export default Header;