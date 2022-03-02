import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import ClickyGame from "./ClickyGame/ClickyGame";

const Home = (props) => {
    // Task 1
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    function componentDidMount() {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },1000)
    }

    componentDidMount()

    return (
        <React.Fragment>
            <h2>Welcome to {props.bootcamp}. It is {time}</h2>
            <ClickyGame/>
        </React.Fragment>
    );
}

export default Home;