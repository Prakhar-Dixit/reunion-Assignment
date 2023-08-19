import { useState } from "react";

const Filter = ({ name, data, filterFun }) => {
  const [filter1Value, setFilter1Value] = useState("");
  const [filter2Value, setFilter2Value] = useState("");
  const [filter3Value, setFilter3Value] = useState("");

  const handleFilter1Change = (e) => {
    const val = e.target.value;
    setFilter1Value(val);
    filterFun(val);
  };
  const handleFilter2Change = (e) => {
    const val = e.target.value;
    setFilter2Value(val);
    filterFun(val);
  };
  const handleFilter3Change = (e) => {
    const val = e.target.value;
    setFilter3Value(val);
    filterFun(val);
  };

  return (
    <div className="">
      <label htmlFor="location" className="block">
        {name}
      </label>
      <select
        id={name}
        value={
          name === "Filter 1"
            ? filter1Value
            : name === "Filter 2"
            ? filter2Value
            : filter3Value
        }
        onChange={
          name === "Filter 1"
            ? handleFilter1Change
            : name === "Filter 2"
            ? handleFilter2Change
            : handleFilter3Change
        }
      >
        <option key={data.length}>Choose {name}</option>
        {data.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Filter;
