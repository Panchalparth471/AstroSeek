import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Icons from "./Components/Icons";
import Services from "./Components/Services";
import What from "./Components/What";
import Astrologers from "./Components/Astrologers";
import Why from "./Components/Why";

function App() {
  return (
    <div className="flex h-full w-[100vw] flex-col">
      <Navbar></Navbar>
      <Main></Main>
      <Icons></Icons>
      <Services></Services>
      <What></What>
      <Astrologers></Astrologers>
      <Why></Why>
      <Footer></Footer>
   </div>
  );
}

export default App;
