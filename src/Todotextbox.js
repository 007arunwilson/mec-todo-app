import React from 'react';

const Todotextbox = (props) => {

    // console.log(props);
    return (<div>
        <input value={props.newValue} onChange={props.changeFn.bind(this)} type="text"/>
        <button onClick={props.todosubmitfn.bind(this)} >Submit Todo</button>
        </div>);

}


export default Todotextbox;