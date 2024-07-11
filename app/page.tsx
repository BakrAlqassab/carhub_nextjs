"use client"
import {Hero, SearchBar, CustomFilter, CarCard, ShowMore} from '@/components'
import {fetchCars} from "@/utils";
import { fuels, yearsOfProduction} from '@/constants'
import Image from "next/image"
import {useState, useEffect} from "react"

export default  function Home() {

const [allCars, setallCars] = useState([])
const [loading, setLoading] = useState(false)

// search states

const [manufacturer, setManufacturer] = useState("");
const [model, setModel] = useState("")

// filter states

const [fuel, setFuel] = useState("")
const [year, setYear] = useState();


const [limit, setLimit] = useState(10)

const getCars = async () => {
  setLoading(true);
  try {
    const result = await fetchCars({
      manufacturer: manufacturer || "",
      model: model || "",
      year: year || 2024,
      fuel: fuel || "",
      limit: limit || 10,
    });


     setallCars(result);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

useEffect(()=>{
  getCars();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [manufacturer, year, limit, fuel, model])

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars


    // function handleSearch(val) {}
    
    return (
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y ma-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold"> Car Catalogue </h1>
            <p> Explore the cars you might likes</p>
            <div className="home__filters">
              <SearchBar
                setManufacturer={setManufacturer}
                setModel={setModel}
              />
              <div className="home__filter-container">
                <CustomFilter
                  title="fuel"
                  options={fuels}
                  setFilter={setFuel}
                />
                <CustomFilter
                  title="year"
                  options={yearsOfProduction}
                  setFilter={setYear}
                />
              </div>
            </div>
            {!isDataEmpty ? (
              <section>
                <div className={"home__cars-wrapper"}>
                  {" "}
                  {allCars?.map((car, index) => (
                    <CarCard key={index} car={car} />
                  ))}
                </div>
                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
                />
              </section>
            ) : (
              <div className={"home__error-container"}>
                <h2 className={"text-black text-xl font-bold"}>
                  {" "}
                  Oops no results
                </h2>
                <p>{allCars.message}</p>
              </div>
            )}

            {loading && <div className="mt-16 w-full flex-center">
              <Image src="/loading.svg" alt="loading" width={50} height={50} className="object_contain" />
              </div>}
          </div>
        </div>
      </main>
    );
}
