import React,  { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Converter from '../components/converter'
import Transaction from "../components/transaction";
import "./styles.css"

var amount = 0;

const IndexPage = () => {
  const [currency, setCurrency] = useState(4.5);
  const [transactionName, setTransactionName] = useState("default");
  const [transactionValue, setTransactionValue] = useState(100);
  const [list, setList] = useState([]);
  

  const onChangeConverter = (event) => {
    setCurrency(event.target.value);
  }

  const onChangeName = (event) => {
    setTransactionName(event.target.value);
  }

  const onChangeValue = (event) => {
    setTransactionValue(event.target.value);
  }

  const addToList = () => {
    const convertedValue = parseFloat((currency * transactionValue).toFixed(2));
    console.log("converted ", convertedValue);
    amount =+ convertedValue;
    const item = {
      name: transactionName,
      value: transactionValue,
      convertedValue: convertedValue,
      currency: currency
    };
    const newList = list.concat([item]);
    setList(newList);
    console.log(amount);
  }

  const removeFromList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  //const calculateAmount

  return (
    <Layout>
      <Converter converterValue={currency} onChangeConverter={onChangeConverter}></Converter>
      <Transaction name={transactionName} value={transactionValue} onChangeName={onChangeName} onChangeValue={onChangeValue}></Transaction>
      <div className="container"><button onClick={addToList}>Dodaj do listy</button></div>
        {
          list.map((item, index) => 
          <div key={index} className="list">
           <div className="item"><div>{index+1}.</div> <div className="text">{item.name} kupiony(a) po kursie {item.currency} kosztował {item.convertedValue} zł. Przy obecnym kursie kosztował(a)by {(currency * item.value).toFixed(2)}</div></div>
           <button onClick={() => removeFromList(index)}>Usuń</button>
          </div>)
        }
        <h1>Suma wszytskich to: {amount}</h1>
    </Layout>
  );
}

export default IndexPage