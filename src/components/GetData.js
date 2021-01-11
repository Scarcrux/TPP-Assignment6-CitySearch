import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function GetData(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://ctp-zip-api.herokuapp.com/city/${props.city.toUpperCase()}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function ZipList(items) {
    const listItems = items.map((item) =>
      <li key={item.toString()}>
        {item}
      </li>
    );
    return (
      <ul>{listItems}</ul>
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
