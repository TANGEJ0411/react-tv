import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function BannerSwiper() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      renderMode: "performance",
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className='navigation-wrapper w-full aspect-video md:aspect-12/5 lg:aspect-18/5 bg-primary relative'>
        <div ref={sliderRef} className="keen-slider h-full">
            {
                [1, 2, 3].map((item, index) => (<div key={index} className="keen-slider__slide bg-blue h-100">{item}</div>))
            }
        </div>
        {loaded && instanceRef.current && (
          <>
            <SwitchButton 
              direction='left' 
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <SwitchButton 
              direction='right' 
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide ===
                instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
        {loaded && instanceRef.current && (
          <div className="flex p-1 absolute bottom-3 left-0 right-0 justify-center">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    // console.log(instanceRef.current, sliderRef);
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={clsx("w-2 h-2 border-none bg-disable mx-2 my-0 cursor-pointer rounded-full", currentSlide === idx ? " bg-white" : "")}
                ></button>
              )
            })}
          </div>  
        )}
    </div>
  )
}

const SwitchButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      className={clsx(
        'absolute top-1/2 transform -translate-y-1/2',
        direction === 'left' ? 'left-0' : 'right-0',
        disabled ? 'text-white-300' : 'text-white'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon 
        path={direction === 'left' ? mdiChevronLeft : mdiChevronRight}
        size={3}
      />
    </button>
  )
}

SwitchButton.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}