import { useState } from "react";
import Filter from "./Filter";
const FilterBox = ({ list, fun }) => {
  const data1 = ["New York", "California", "Delhi", "Mumbai"];
  const data2 = [
    "$1000 - $1500",
    "$1500 - $2000",
    "$2000 - $2500",
    "$2500 - $3000",
    "$3000 - $3500",
  ];
  const data3 = ["House", "Flat"];
  const [filter1Value, setFilter1Value] = useState("");
  const [filter2Value, setFilter2Value] = useState("");
  const [filter3Value, setFilter3Value] = useState("");
  const [filter4Value, setFilter4Value] = useState("");

  const filterFun1 = (elementVal) => {
    setFilter1Value(elementVal);
  };
  const filterFun2 = (elementVal) => {
    setFilter2Value(elementVal);
  };
  const handleFilter3Value = (e) => {
    setFilter3Value(e.target.value);
  };
  const filterFun4 = (elementVal) => {
    setFilter4Value(elementVal);
  };
  const dummyData = ["Choose location", "Choose Price", "Choose PropertyType"];
  //for understanding purpose
  const handleSearch = () => {
    const newList = list.filter((element) => {
      const arr = filter2Value.split(" ");
      const price1 = parseInt(arr[0]?.substring(1));
      const price2 = parseInt(arr[2]?.substring(1));
      const location = element.address.split(",")[1].replace(" ", "");

      if (
        location === filter1Value ||
        dummyData.includes(filter1Value) ||
        !filter1Value
      ) {
        if (element && element.price >= price1 && element.price <= price2) {
          if (
            element.type === filter4Value ||
            dummyData.includes(filter4Value) ||
            !filter4Value
          ) {
            return true;
          } else {
            return false;
          }
        } else if (dummyData.includes(price1) || !price1) {
          if (
            filter4Value === element.type ||
            dummyData.includes(filter4Value) ||
            !filter4Value
          )
            return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    console.log("newList", newList);
    fun(newList);
  };

  return (
    <div className="filterBox">
      <Filter name="location" data={data1} filterFun={filterFun1} />
      <Filter name="Price" data={data2} filterFun={filterFun2} />
      <div className=" ">
        <label htmlFor="checkIn" className="block">
          Choose a Date
        </label>
        <input
          type="date"
          id="checkIn"
          value={filter4Value}
          onChange={handleFilter3Value}
        ></input>
      </div>
      <Filter name="PropertyType" data={data3} filterFun={filterFun4} />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default FilterBox;
