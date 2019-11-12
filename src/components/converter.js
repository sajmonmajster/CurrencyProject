import React,  { useState } from "react"
import "./styles.css"

const Converter = ({converterValue, onChangeConverter}) => {
  return (
    <div className="container">
        <div className="row">Kurs EURO = <input type="text" name="converter" value={converterValue} onChange={onChangeConverter} /></div>
    </div>
  );
}

export default Converter
