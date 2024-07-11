"use client"
import React, { Fragement, useState} from 'react'
import {CustomFilterProps} from '@/types'
import useRouter from "next/navigation"
import Image from "next/image";
import {Listbox, Transition} from "@headlessui/react"

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const [selected, setselected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setselected(e)}>
        <div className="relative w-fir z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate"> {selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object contain"
              alt="Chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragement}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  value={option}
                  className={({active})=> `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white": "text-gray-900"}`}
                >
                  {({ selected }) => <span>{option.title}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter