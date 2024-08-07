import {manufacturers} from "@/constants";
import {MouseEventHandler} from 'react'

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonelement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
    title: string;
    options:OptionProps[]
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number,
}


export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}
export interface ShowMoreProps {
    pageNumber:number,
    ixNext:boolean,
    setLimit:() => void;
}