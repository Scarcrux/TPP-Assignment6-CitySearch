import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import GetMoreData from "./GetMoreData";

function GetData(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [states, setStates] = useState([]);
  const [detailState, setdetailState] = useState([]);

  useEffect(() => {
    fetch(`http://ctp-zip-api.herokuapp.com/city/${props.city.toUpperCase()}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          result.map((result) =>{
            fetch('http://ctp-zip-api.herokuapp.com/zip/' + result)
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setStates(prevArray => [...prevArray, result])
                }
              )

          })
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }, [])

  // useEffect(() => {
  //   items.map(function(item, index){
  //   let url = 'http://ctp-zip-api.herokuapp.com/zip/' + item
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setStates(prevArray => [...prevArray, result])

  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // })
  // }, [])
 







  function ZipList(items) {
    // console.log(states)
    // states.map((arrays, index) => {
      
    //    arrays.map((records) =>{
    //     <li key={index}>{records.Zipcode}, {records.City}, {records.State}</li>
    //     console.log(records.City)
    //   })
    // });
    const listItems = states.map((item, index) =>
      <li key={index}>
        {item[0].Zipcode}, {item[0].City}, {item[0].State}
      </li>
    );
    return (
      <ul>
        <li>{listItems}</li>
      </ul>
      
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      ZipList(items)
    );
  }
}

export default GetData;
