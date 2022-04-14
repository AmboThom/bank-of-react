import React, {useState, useEffect} from 'react';
import '../App.css';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import axios from "axios";

const Credits = (props) => {
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        fetchData();
    }, [credits])

    const fetchData = async () => {
        let linkToCreditAPI = 'https://moj-api.herokuapp.com/credits';
        try {
            let response = await axios.get(linkToCreditAPI);
            console.log(response);
            setCredits(response.data);
        }
        catch (error) {
            if (error.response) {
                console.log(error.response.message);
                console.log(error.response.status);
            }
        }
    };

    let makeCreditsList = credits.map((credit, index) => {
        return (
            <div key={index}>
                <h4>{`Description: ${credit.description}`}</h4>
                <h5>{`Amount: ${credit.amount}`}</h5>
                <h5>{`Date: ${credit.date}`}</h5>
                <p>---------------------------------------</p>
            </div>
        );
    });

    return (
        <div className="App">
            <h1>Credits</h1>
            <h3>Credit History</h3>
            {makeCreditsList}
            <AccountBalance accountBalance={props.accountBalance} />
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Credits;