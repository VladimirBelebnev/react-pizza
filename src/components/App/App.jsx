import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";
import MainPage from "../pages/MainPage";

import "./App.scss";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://6389f629c5356b25a20dc4dd.mockapi.io/react-pizza")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <MainPage data={data} />
        </div>
    );
};

export default App;
