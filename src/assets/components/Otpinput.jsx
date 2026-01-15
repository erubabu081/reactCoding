import React, { useState, useEffect, useRef } from "react";

const Otpinput = () => {
  //const [otpText, setOtpText] = useState('');
  const otpArray = new Array(5).fill("");
  const [inputArray, setInputArray] = useState(otpArray);
  const inputref = useRef([]);

  useEffect(() => {
    inputref.current[0].focus();
  }, []);
  const handleOnhange = (e, index) => {
    if (isNaN(e.target.value)) return "";
    const newInputArray = [...inputArray];
    newInputArray[index] = e.target.value.slice(-1);
    setInputArray(newInputArray);
    e.target.value && inputref.current[index + 1]?.focus();
  };
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      inputref.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div>Otp Input</div>
      {inputArray.map((item, index) => (
        <input
          type="text"
          value={inputArray[index]}
          onChange={(e) => handleOnhange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          key={index}
          ref={(item) => (inputref.current[index] = item)}
          className="border-amber-500 border w-15 h-15"
        ></input>
      ))}
    </>
  );
};

export default Otpinput;
