import BannerSwiper from "./views/homePage/BannerSwiper"
import Header from "./components/Header"
import './style/index.css'
import TypeButtonScope from "./views/homePage/TypeButtonScope"
import LiveSliderBar from "./views/homePage/LiveSliderBar"

function App() {

  return (
    <>
      <Header />
      <BannerSwiper />
      <TypeButtonScope />
      <LiveSliderBar displaySlides={3.5}/>
      <LiveSliderBar displaySlides={5.85}/>
    </>
  )
}

export default App
