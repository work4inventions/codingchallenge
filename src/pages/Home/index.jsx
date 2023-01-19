import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { getData } from "../../services/apis";
import { getLocalCartData } from "../../utils/CommonUtils";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storageData = getLocalCartData();
    if (storageData.length > 0) {
      setData(storageData);
    } else {
      getData()
        .then((data) => {
          setData(data.data.reverse());
          localStorage.setItem("data", JSON.stringify(data.data.reverse()));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const removeItem = (id) => {
    let updatedCart = data.filter((cur) => cur.id !== id);
    setData(updatedCart);
    localStorage.setItem("data", JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-[#0d1117] h-[100%] flex pt-[100px]">
      <div className="gradient h-[100%] w-[100%] fixed "></div>
      <Header />
      <div className="flex flex-wrap justify-center container m-[auto] gap-[40px] pt-[50px] pb-[50px]">
        {data.map((data, index) => {
          return <Card data={data} index={index} removeItem={removeItem} />;
        })}
      </div>
    </div>
  );
};

export default Home;
