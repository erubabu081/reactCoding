import React, { useState, useEffect, useRef } from "react";

const Otpinput = () => {
  const otptxt = Array(5).fill("");
  const [otpArray, setOtpArray] = useState(otptxt);
  const refArray = useRef([]);

  const handleOnChange = (e, index) => {
    const val = e.target.value.slice(-1);
    if (isNaN(val)) return;
    const newArray = [...otpArray];
    newArray[index] = val;
    setOtpArray(newArray);
    val && refArray.current[index + 1]?.focus();
  };

  useEffect(() => {
    refArray.current[0].focus();
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "") {
      refArray.current[index - 1].focus();
    }
  };

  return (
    <>
      <div>OTP INPUT</div>

      {otpArray.map((item, index) => (
        <input
          type="text"
          key={index}
          name="otpText"
          className="border p-5 w-15 h-15"
          value={item}
          ref={(item) => (refArray.current[index] = item)}
          onChange={(e) => handleOnChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        ></input>
      ))}
    </>
  );
};

export default Otpinput;
