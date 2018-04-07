import React from 'react';

const Todolist = (props) => {

    console.log(props);
    
    return (<ul>
        {props.todolist.map((i,i_)=><li key={i_} >{i}</li>)}
    </ul>);

}

export default Todolist;