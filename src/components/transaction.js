import React,  { useState } from "react"
import "./styles.css"

const Transaction = ({name, onChangeName, value, onChangeValue}) => {
  return (
    <div className="container">
       <div className="row">Nazwa transakcji<input className="input" type="text" name="transactionValue" value={name} onChange={onChangeName} /></div>
       <div className="row"><div className="describe">Kwota w Euro</div><input className="input"  type="text" name="transactionValue" value={value} onChange={onChangeValue} /></div>
    </div>
  );
}

export default Transaction