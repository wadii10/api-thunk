import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/action";
import CountrieItem from "./CountrieItem";

const ListCountries = () => {

  
  const {countries} = useSelector ( (state) => state );
  // console.log(countries)

  //dispatch
  const dispatch = useDispatch()

  //use effect
  useEffect( () => {
  dispatch(getCountries());
  }, []);

  return (
    <div className="countries-list">
      {countries&&React.Children.toArray(
        countries.map((el) => <CountrieItem country={el} />)
      )}
    </div>
  );
};

export default ListCountries;
