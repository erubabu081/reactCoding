import React, { useState } from "react";

const Chips = () => {
  const [chip, setChip] = useState("");
  //const chipObj = [];
  const [chipsArray, setChipsArray] = useState([]);

  const handleChipsInput = (e) => {
    setChip(e.target.value);
    console.log(e.target.value);
  };
  const addChips = () => {
    //const enterChip = e.target.value;
    //const newArray = [...chips];

    const newChip = {
      id: chipsArray.length + 1,
      chipName: chip,
    };
    const newArray = [...chipsArray, newChip];
    console.log("chipsArray", newArray);
    setChipsArray(newArray);
  };
  const deleteChip = (id) => {
    const updatedChips = chipsArray.filter((item) => item.id !== id);
    //console.log(updatedChips);
    setChipsArray(updatedChips);
  };

  return (
    <>
      <h2>Chips</h2>
      <input
        type="text"
        name="chips-input"
        placeholder="Enter Tag name"
        className="border rounded-2xl p-5"
        value={chip}
        onChange={(e) => handleChipsInput(e)}
      ></input>
      <button name="add-chip" onClick={addChips}>
        Add Chip
      </button>
      <div>
        {chipsArray?.map((chip) => (
          <div key={chip.id} className="m-3">
            {chip.chipName}{" "}
            <span className="m-3" onClick={() => deleteChip(chip.id)}>
              X
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chips;
