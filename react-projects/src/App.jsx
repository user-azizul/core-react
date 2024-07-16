import PassWordGenerator from "./react-project/01.PassGenerator/PassGenerator";
import ModalData from "./react-project/02.ModalPopUp/ModalData";
import Accordion from "./react-project/03.Accordion/Accordion";
import RandomColor from "./react-project/04.RandomColor/RandomColor";
import "./App.css";
import RatingIcon from "./react-project/05.RatingIcon/RatingIcon";
import ImageSlider from "./react-project/06.slider/Slider";

function App() {
  return (
    <>
      {/* <PassWordGenerator />; */}

      {/* <ModalData /> */}
      {/* <Accordion/> */}
      {/* <RandomColor /> */}
      {/* <RatingIcon /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
    </>
  );
}

export default App;
