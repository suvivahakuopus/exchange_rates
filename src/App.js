import logo from './logo.svg';
import './App.css';
import { getByPlaceholderText } from '@testing-library/dom';
import {useState} from "react";
import React from 'react';
import { render } from '@testing-library/react';

const URL= "http://api.exchangeratesapi.io/v1/latest?access_key=";
const API_KEY= "428a565d69bd626e8e979c2ab362a7b2";

function  App(){

  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

render(); {
  return (
<div id="container">
  <form onSubmit={convert}>
    <div>
      <h3>Exchange rates</h3>
      <label>Euro</label>&nbsp;
      <input type="number" step="0.01"
      value={eur} onChange={e => setEur(e.target.value)}/>
      <output className="joku">{rate}</output>
      </div>
      <div>
      <label className="punta">Gbp</label>
      <output>{gbp.toFixed(2)} €</output>
      </div>
      <div>
      <button className="calculate">Calculate</button>
      </div>
    </form>
  </div>
  
    );
    }


  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL + API_KEY;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        setRate(json.rates.GBP);

        setGbp(eur * json.rates.GBP);

      } else {
        alert("Error retrieving exchange rate.");
        console.log(response);
      }

    } catch (err) {
      alert(err);
    }
  }
}
    
export default App;
