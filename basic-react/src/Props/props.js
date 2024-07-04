function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>; // ai khane props pass kora hoyese
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
      {/* ai khane car  componet e brand e carInfo pass kora hoyese and ai carInfo call korse carInfo.model tar jonno ans pabo ** I am a Mustang  */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
