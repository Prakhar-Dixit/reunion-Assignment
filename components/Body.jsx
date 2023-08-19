import FilterBox from "./FilterBox";
import mockData from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [dataList, setDataList] = useState(mockData);
  const handleDatList = (arr) => {
    setDataList(arr);
  };
  console.log(dataList);
  return (
    <div className="body">
      <div className="body-child">
        <h1>Search properties to rent</h1>
        <input
          type="text"
          name=""
          placeholder="Search with name"
          id=""
          onInput={(e) => {
            const value = e.target.value;
            const tempList = mockData?.filter(
              (element) => value.toLowerCase() === element?.name.toLowerCase()
            );
            value === "" ? setDataList(mockData) : setDataList(tempList);
          }}
        />
      </div>
      <FilterBox list={mockData} fun={handleDatList} />
      <div className="card-container">
        {dataList.map((element, index) => (
          <Card key={index} data={element} />
        ))}
      </div>
    </div>
  );
};
export default Body;

/*

[
    {
        "price" : 200,
        "address" : key,
         "name" : key,
         info : {
            beds : 3,
            bathroom : 4,
            area : sq km
         }
    },
    {
         "price" : 200,
        "address" : key,
         "name" : key,
         info : {
            beds : 3,
            bathroom : 4,
            area : sq km
         }
    },
    {
         "price" : 200,
        "address" : key,
         "name" : key,
         info : {
            beds : 3,
            bathroom : 4,
            area : sq km
         }
    }
]

*/
