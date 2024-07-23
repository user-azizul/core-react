// import React, { useEffect, useState } from "react";

// function LoadMoreData() {
//   const [loading, setLoading] = useState(false);
//   const [disable, setDisable] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);

//   async function fetchProducts() {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=20&skip=${count * 20}`
//       );
//       const results = await response.json();
//       console.log(results);
//       if (results && results.products) {
//         setProducts((prevProducts) => [...prevProducts, ...results.products]);
//       }
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, [count]);
//   useEffect(() => {
//     if (products && products.length === 100) setDisable(true);
//   }, [products]);

//   if (loading) {
//     return <div className="text-center mt-8">Loading Data.....</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.length ? (
//           products.map((item) => (
//             <div
//               className="product border rounded-lg shadow-lg p-4"
//               key={`${item.id}${item.title}`}
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//               <p className="mt-2 text-lg font-semibold">{`${item.id} ${item.title}`}</p>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center">No Products Found</div>
//         )}
//       </div>
//       <div className="text-center mt-8">
//         <button
//           disabled={disable}
//           onClick={() => setCount(count + 1)}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//         >
//           {disable ? "No more" : "Load More"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LoadMoreData;

// import { useEffect, useState } from "react";
// import "./style.css";

// export default function LoadMoreData() {
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [disableButton, setDisableButton] = useState(false);
//   function handleButton() {
//     setCount(count + 1);
//     // setProducts((prev) => [...prev, ...products]);
//     console.log(count, products.length);
//   }

//   async function fetchProducts() {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=20&skip=${
//           count === 0 ? 0 : count * 20
//         }`
//       );

//       const result = await response.json();

//       if (result && result.products && result.products.length) {
//         count && count === 0
//           ? setProducts([...result.products])
//           : setProducts((prevData) => [...prevData, ...result.products]);
//         setLoading(false);
//       }
//     } catch (e) {
//       console.log(e);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, [count]);

//   useEffect(() => {
//     if (products && products.length === 100) setDisableButton(true);
//   }, [products]);

//   if (loading) {
//     return <div>Loading data ! Please wait.</div>;
//   }

//   return (
//     <div className="load-more-container">
//       <div className="product-container">
//         {products && products.length
//           ? products.map((item) => (
//               <div className="product" key={item.id}>
//                 <img src={item.thumbnail} alt={item.title} />
//                 <p>${`${item.id} ${item.title}`}</p>
//               </div>
//             ))
//           : null}
//       </div>
//       <div className="button-container">
//         <button disabled={disableButton} onClick={() => handleButton()}>
//           Load More Products
//         </button>
//         {disableButton ? <p>You have reached to 100 products</p> : null}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const results = await response.json();
      console.log(`Fetched products at count ${count}:`, results);
      if (results && results.products) {
        setProducts((prevProducts) => [...prevProducts, ...results.products]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading && count === 0) {
    return <div className="text-center mt-8">Loading Data.....</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length ? (
          products.map((item) => (
            <div
              className="product border rounded-lg shadow-lg p-4"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-semibold">
                ${`${item.id} ${item.title}`}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">No Products Found</div>
        )}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
export default LoadMoreData;
