import React,  { useState } from "react"

const Transaction = ({name, onChangeName, value, onChangeValue}) => {
  return (
    <div>
       Nazwa transakcji <input type="text" name="transactionValue" value={name} onChange={onChangeName} />
       Kwota w Euro <input type="text" name="transactionValue" value={value} onChange={onChangeValue} />
    </div>
  );
}

export default Transaction