"use client"
import React from "react";
import {ShowMoreProps} from "@/types"

import CustomButton from "./CustomButton"
import {updateSearchParams} from "@/utils"


export default function ShowMore({pageNumber, isNext,setLimit}:ShowMoreProps) {
  const handleNavigation = () => {
    const newLimit =(pageNumber + 1) * 10
    setLimit(newLimit);
  };
  return (
    <div className="w-full gap-5 flex-center mt-10">
      {!isNext && (
        <CustomButton
          title=" Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}