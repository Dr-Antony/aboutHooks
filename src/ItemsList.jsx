import React, { useEffect, useMemo, useState } from "react";


const ItemsList = ({getItems}) => {
const [items,setItems]= useState([]);
useEffect(()=>{
    console.log('render')
    const newItems = getItems();
    setItems(newItems)
},[getItems])
    return (
        <ul>
            {items.map((i)=>{ return (<li key={i}>{i}</li>)})}
        </ul>
    )
}

export default ItemsList;
