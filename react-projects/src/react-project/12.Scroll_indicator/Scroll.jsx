import React, { useState, useEffect } from "react"; 
import './scroll.css'

export default function Scroll() {
  // State declarations
  const [scrollTop, setScrollTop] = useState(0); 
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);

  // Function to handle scroll events and calculate scroll position
  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop; // Get the current scroll position
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; // Calculate the total scrollable height
    const scrolled = (windowScroll / height) * 100; // Calculate the scroll position as a percentage
    setScrollTop(scrolled); // Update the scrollTop state with the calculated percentage
  };

  // Function to fetch data from the API
  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100"); // Fetch data from the API
      const storeData = await res.json(); // Parse the response as JSON
      setData(storeData.products); // Update the data state with the fetched products
    } catch (err) {
      setError(err);
    }
  }

 
  useEffect(() => {
    fetchData(); 
    }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll); // Add the onScroll event listener
    return () => window.removeEventListener("scroll", onScroll); // Clean up the event listener when the component unmounts
  }, []);


  // Render the component
  if (error) {
    return <div>Error: {error.message}</div>; // If there is an error, display the error message
  }

  return (
    <>
    <div className="indicator-container"> 
             <h2>Scroll Indicator</h2> 
            <div
                className="indicator"
                style={{ width: `${scrollTop}%` }} // Set the width of the scroll indicator based on scrollTop
            >
            </div>
      </div>
     
     <div className="data"> 
      
        {data.length > 0 ? ( // Check if data has been fetched
          data.map((dataItem) => (
            <div className="box" key={dataItem.id}> 
              <h3 className="title">{dataItem.title}</h3> 
             
            </div>
          ))
        ) : (
          <div>Loading...</div> // Display a loading message if data is not yet fetched
        )}
      </div>
  
      </>
  );
}
