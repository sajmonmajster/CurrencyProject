import React,  { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Converter from '../components/converter'

const IndexPage = () => {
  const [currency, setCurrency] = useState(4.5);
  const [list, setList] = useState([]);

  const onChange = (event) => {
    setCurrency(event.target.value);
  }

  const addToList = () => {
    const item = {
      value: currency,
    };
    const newList = list.concat([item]);

    setList(newList);
  }

  return (
    <Layout>
      <Converter value={currency} onChange={onChange}></Converter>
      <button onClick={addToList}>Add to list</button>
      {
        list.map((item, index) => <div key={index}>{item.value}</div>)
      }
    </Layout>
  );
}

export default IndexPage


// const IndexPage = () => {
//   const [currency, setCurrency] = useState(0);
//   const [list, setList] = useState([]);

//   const onChange = (event) => {
//     setCurrency(event.target.value);
//   }

//   const addToList = () => {
//     const item = {
//       value: currency,
//     };
//     const newList = list.concat([item]);

//     setList(newList);
//   }

//   return (
//     <Layout>
//       <input onChange={onChange}/>
//       <p>1 EUR = {currency} zł</p>
//       <button onClick={addToList}>Add to list</button>
//       {
//         list.map((item, index) => <div key={index}>{item.value}</div>)
//       }
//     </Layout>
//   );
// }
