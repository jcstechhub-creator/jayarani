import Image from "next/image";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import News from "./components/News";
import Events from "./components/Events";
import PopupPoster from "./components/Popup";

export default function Home() {
  return (
    <>
    
      <PopupPoster />
      <Hero />
      <Courses />
      <News />
      <Events />
    </>
  
  );
}
