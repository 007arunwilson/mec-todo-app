import React from 'react';

const Header = (props) =>{
    return (
    <div style={{'text-align':'center'}} >
    <div style={{color:'red'}}>{props.title}</div>
    <div style={{fontSize:'12px'}}>{props.title2}</div>
    </div>)

}
export default Header;