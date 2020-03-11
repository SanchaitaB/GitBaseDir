import React from "react";
import { Link } from 'react-router-dom';
import { blockStatement } from "@babel/types";

const Header = () =>
{
    const style = { 
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };
    return(
        <div>
            <Link style={style} to='/'>Home</Link>
            <Link style={style} to='/jokes'>Jokes</Link>
        </div>
    );
}
export default Header;