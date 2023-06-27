import React from "react";
import { Button } from "react-bootstrap";
import { useAlert } from "./AlertProvider/AlertContext";


const Main = () => {
    const {toggle} = useAlert();
    return (
        <div >
        <h1>Привет в примере с Context</h1>
        <Button onClick={toggle}>Show alert</Button>
        </div>
    )
}



export default Main;