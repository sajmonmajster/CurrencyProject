import React,  { useState } from "react"

const Converter = ({value, onChange}) => {
  return (
    <div>
        1 EUR = <input type="text" name="converter" value={value} onChange={onChange} />
    </div>
  );
}

export default Converter
