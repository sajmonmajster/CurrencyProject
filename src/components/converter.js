import React,  { useState } from "react"

const Converter = ({converterValue, onChangeConverter}) => {
  return (
    <div>
        1 EUR = <input type="text" name="converter" value={converterValue} onChange={onChangeConverter} />
    </div>
  );
}

export default Converter
