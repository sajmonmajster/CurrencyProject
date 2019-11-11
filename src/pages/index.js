import React,  { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Converter from '../components/converter'
import Transaction from "../components/transaction";

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
    const convertedValue = (currency * transactionValue).toFixed(2)
    const item = {
      name: transactionName,
      value: transactionValue,
      convertedValue: convertedValue,
      currency: currency
    };
    const newList = list.concat([item]);

    setList(newList);
  }

  const removeFromList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <Layout>
      <Converter converterValue={currency} onChangeConverter={onChangeConverter}></Converter>
      <Transaction name={transactionName} value={transactionValue} onChangeName={onChangeName} onChangeValue={onChangeValue}></Transaction>
      <button onClick={addToList}>Add to list</button>
        {
          list.map((item, index) => 
          <div key={index}>
           {index+1}. {item.name} kupiony(a) po kursie {item.currency} kosztował {item.convertedValue} złotych. Przy obecnym kursie kosztował(a) by {(currency * item.value).toFixed(2)}
           <button onClick={() => removeFromList(index)}>Remove from list</button>
          </div>)
        }
    </Layout>
  );
}

export default IndexPage