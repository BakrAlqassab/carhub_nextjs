"use client"
import React from 'react'
import SearchManufacturer from "./SearchManufacturer"
import  {useState} from 'react'

import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({setManufacturer,setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");


  const [searchModel, setSearchModel] = useState("");
  
  const handleSearch = (e:React.FormEvent<HTMLFormElement>):void => {

      e.preventDefault();

      if(searchManufacturer === "" && searchModel === "") {
        alert("Please fill the search fields.");
      }


          setModel(searchModel.toLowerCase())
          setManufacturer(searchManufacturer.toLowerCase());
  };

  // const updateSearchParams = (model: string, manufacturer: string) => {
  //     const searchParams = new URLSearchParams(window.location.search);

  //     if(model) {
  //       searchParams.set("model", model);
  //     } else {
  //       searchParams.delete("model");
  //     }


  //     if (manufacturer) {    
  //       searchParams.set("manufacturer", manufacturer);
  //     } else {        
  //       searchParams.delete("manufacturer");
  //     }

  //     const newPathname = `${
  //       window.location.pathname
  //     }?${searchParams.toString()}`;
      

  //     router.push(newPathname);

  // };
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute 2-[20px] h-[20px] ,l-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e)=> setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar