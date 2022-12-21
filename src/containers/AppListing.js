import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setColumns } from "../redux/actions/tableActions";
import { setApps } from "../redux/actions/appAction";
import ProductComponent from "./ProductComponent";
import "./AppListing.css";

const AppListing = () => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  let [isLoaded, setIsLoaded] = useState(false);
  
  const dispatch = useDispatch();
  const url = "https://go-dev.greedygame.com/v3/dummy/report?startDate=" + startDate + "&endDate=" + endDate;
  const fetchProducts = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Err: ", err);
    });

    dispatch(setColumns(response.data.data));
  };
  const fetchApps = async () => {
    const response = await axios
      .get("https://go-dev.greedygame.com/v3/dummy/apps")
      .catch((err) => {
        console.log("Err: ", err);
      });
    var tempApps = {};
    response.data.data.forEach((element) => {
      tempApps[element.app_id] = element.app_name;
    });
    dispatch(setApps(tempApps));
  };

  useEffect(() => {
    if (startDate && endDate) {
      fetchProducts();
      
      setIsLoaded(true);
    }
    else{
      setIsLoaded(false);
    }
    fetchApps();
  }, [endDate , startDate , url]);

  

 

  return (
    <>
      <div className="bg">
        <h1 className="analytics">Analytics</h1>
        <label className="label">select Start Date</label>
        <br />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <label className="label">select End Date </label>
        <br />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
      </div>
      <div className="ui ">

      {isLoaded === false ? <h1 className="error">Please fill required valid inputs Start Date And End Date to see analytics results</h1>:  

        
        <ProductComponent />
      }
      </div>
    </>
  );
};

export default AppListing;
