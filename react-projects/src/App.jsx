import PassWordGenerator from "./react-project/01.PassGenerator/PassGenerator";
import ModalData from "./react-project/02.ModalPopUp/ModalData";
import Accordion from "./react-project/03.Accordion/Accordion";
import RandomColor from "./react-project/04.RandomColor/RandomColor";
import "./App.css";
import RatingIcon from "./react-project/05.RatingIcon/RatingIcon";
import ImageSlider from "./react-project/06.slider/Slider";
import LoadMoreData from "./react-project/07.LoadMoreData/LoadMoreData";
import RouterApp from "./react-project/08.router project/RouterApp";
import TreeMenu from "./react-project/09.TreeMenu/TreeMenu";
import Menus from "./react-project/09.TreeMenu/Data";
import QrCodeGenerator from "./react-project/10.QrCode/QrCode";
import ThemeLocalStorage from "./react-project/11.ThemeLocalStorage/ThemeLocalStorage";

function App() {
  return (
    <>
      {/* <PassWordGenerator />; */}

      {/* <ModalData /> */}
      {/* <Accordion/> */}
      {/* <RandomColor /> */}
      {/* <RatingIcon /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} /> */}
      {/* <LoadMoreData /> */}
      {/* <RouterApp /> */}
      {/* <TreeMenu menus={Menus} /> */}
      {/* <QrCodeGenerator />  */}
      <ThemeLocalStorage/>
    </>
  );
}

export default App;
