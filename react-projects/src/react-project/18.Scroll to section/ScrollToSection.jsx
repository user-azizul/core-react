// import React, { useRef } from "react";
// import "./ScrollToSection.css"; // Import the CSS file

// function ScrollToSection() {
//   const data = [
//     { label: "First Section", id: 1, className: "section-red" },
//     { label: "Second Section", id: 2, className: "section-blue" },
//     { label: "Third Section", id: 3, className: "section-green" },
//     { label: "Fourth Section", id: 4, className: "section-purple" },
//     { label: "Fifth Section", id: 5, className: "section-orange" }
//   ];

//   // Create refs for each section
//   const sectionRefs = useRef([]);

//   const scrollToSection = (index) => {
//     sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <div className="button-container">
//         {data.map((dataItem, index) => (
//           <button key={dataItem.id} onClick={() => scrollToSection(index)}>
//             {dataItem.label}
//           </button>
//         ))}
//       </div>
//       {data.map((dataItem, index) => (
//         <div
//           key={dataItem.id}
//           ref={(el) => (sectionRefs.current[index] = el)}
//           className={`section ${dataItem.className}`}
//         >
//           <p>{dataItem.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ScrollToSection;

import React, { useRef, useState, useEffect } from "react";
import "./ScrollToSection.css"; // Import the CSS file

function ScrollToSection() {
  const data = [
    { label: "First Section", id: 1, className: "section-red" },
    { label: "Second Section", id: 2, className: "section-blue" },
    { label: "Third Section", id: 3, className: "section-green" },
    { label: "Fourth Section", id: 4, className: "section-purple" },
    { label: "Fifth Section", id: 5, className: "section-orange" }
  ];

  const [navHeight, setNavHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const sectionRefs = useRef([]);
  const navbarRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    // Calculate heights on mount
    const updateHeights = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.getBoundingClientRect().height);
      }
      if (linksContainerRef.current) {
        setContainerHeight(
          linksContainerRef.current.getBoundingClientRect().height
        );
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const scrollToSection = (index) => {
    const element = sectionRefs.current[index];
    if (element) {
      let position = element.offsetTop - navHeight;

      // Adjust for fixed navbar
      if (
        navbarRef.current &&
        navbarRef.current.classList.contains("fixed-nav")
      ) {
        position = position - navHeight;
      }

      // Adjust for container height if necessary
      if (navHeight > 82) {
        position = position + containerHeight;
      }

      // Add margin top for visual spacing
      const marginTop = 20; // Adjust this value to your desired margin
      position -= marginTop;

      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
      });

      // Close links container if needed
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = "0";
      }
    }
  };

  return (
    <div>
      <nav ref={navbarRef} className="navbar">
        {/* Your navbar content */}
        <div ref={linksContainerRef} className="button-containers">
          {data.map((dataItem, index) => (
            <button key={dataItem.id} onClick={() => scrollToSection(index)}>
              {dataItem.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="mysection">
        {data.map((dataItem, index) => (
          <div
            key={dataItem.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`section ${dataItem.className}`}
          >
            <p>{dataItem.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollToSection;
