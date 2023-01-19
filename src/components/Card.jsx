import React from "react";
import { MdDelete } from "react-icons/md";
const Card = (props) => {
  const { data, index, removeItem } = props;
  return (
    <div
      className="flex flex-col p-5 h-[fit-content] bg-white rounded-md  z-10"
      key={index}
    >
      <figure className="scale-100 hover:scale-95 ease-in duration-500">
        <img
          src={data.download_url}
          alt=""
          className="w-[400px] h-[200px] object-cover  rounded-md "
        />
      </figure>
      <div className="flex justify-between mt-5  items-center justify-center ">
        <p className="text-[20px]">{data.author}</p>
        <MdDelete
          className="cursor-pointer"
          size={25}
          onClick={() => removeItem(data.id)}
        />
      </div>
    </div>
  );
};

export default Card;
