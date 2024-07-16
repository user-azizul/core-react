import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Slider.css";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImg(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImg(url);
    }
  }, [url]);

  function handlePrevious() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function handleNext() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  if (loading) {
    return <div>Data is loading... Please wait...</div>;
  }

  if (errorMsg) {
    return <div>Something went wrong... {errorMsg}</div>;
  }

  return (
    <div className="flex-container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length > 0
        ? images.map((img, index) => (
            <img
              key={img.id}
              src={img.download_url}
              alt={img.download_url}
              className={`current-image ${
                current === index ? "active" : "hide-current-image"
              }`}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="current-indicators">
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)} // Wrap in arrow function to avoid immediate invocation
                className={`current-indicator ${
                  current === index ? "active" : "inactive-indicator"
                }`}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
