import BannerSwiper from "./views/homePage/BannerSwiper"
import Header from "./components/Header"
import './style/index.css'
import TypeButtonScope from "./views/homePage/TypeButtonScope"
import LiveSliderBar from "./views/homePage/LiveSliderBar"
import DramaSliderBar from "./views/homePage/DramaSliderBar"

function App() {

  return (
    <>
      <Header />
      <BannerSwiper />
      <TypeButtonScope />
      <LiveSliderBar displaySlides={3.5} />
      <DramaSliderBar displaySlides={5.8} />
    </>
  )
}

export default App
