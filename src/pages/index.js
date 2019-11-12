import React,  { useState } from "react"
import Layout from "../components/layout"
import Converter from '../components/converter'
import Transaction from "../components/transaction";
import "./styles.css"


const IndexPage = () => {
  const [currency, setCurrency] = useState(4.5);
  const [transactionName, setTransactionName] = useState("default");
  const [transactionValue, setTransactionValue] = useState(100);
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [max, setMax] = useState(0);
  

  const onChangeConverter = (event) => {
    setCurrency(event.target.value);
  }

  const onChangeName = (event) => {
    setTransactionName(event.target.value);
  }

  const onChangeValue = (event) => {
    setTransactionValue(event.target.value);
  }

  const maxValue = (newList) => {
    let max = 0;
    for(let i=0; i<newList.length; i++) {
      if(newList[i].convertedValue > max ) {
        max = newList[i].convertedValue;
      }
    }
    setMax(max);
  }

  const addToList = () => {
    const convertedValue = parseFloat((currency * transactionValue).toFixed(2));
    console.log("converted ", convertedValue);
    const newAmount = amount + convertedValue;
    setAmount(newAmount) ;
    const item = {
      name: transactionName,
      value: transactionValue,
      convertedValue: convertedValue,
      currency: currency
    };
    const newList = list.concat([item]);
    setList(newList);
    maxValue(newList);
  }

  const removeFromList = (index) => {
    const newList = [...list];
    const newAmount = amount - newList[index].convertedValue;
    setAmount(newAmount);
    newList.splice(index, 1);
    setList(newList);
    maxValue(newList);
  }

  //const calculateAmount

  return (
    <Layout>
      <Converter converterValue={currency} onChangeConverter={onChangeConverter}></Converter>
      <Transaction name={transactionName} value={transactionValue} onChangeName={onChangeName} onChangeValue={onChangeValue}></Transaction>
      <div className="container">
        <div className="addMenu"><button onClick={addToList}>Dodaj do listy</button><div>Max wartość: {max}zł</div></div>        
      </div>
        {
          list.map((item, index) => 
          <div key={index} className="list">
           <div className="item"><div>{index+1}.</div> <div className="text">{item.name} kupiony(a) po kursie {item.currency} kosztował {item.convertedValue} zł. Przy obecnym kursie kosztował(a)by {(currency * item.value).toFixed(2)}</div></div>
           <button onClick={() => removeFromList(index)}>Usuń</button>
          </div>)
        }
        <h2>Suma wszytskich to: {amount}</h2>
    </Layout>
  );
}

export default IndexPage