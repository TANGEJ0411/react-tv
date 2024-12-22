import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

export default function SnapSliderNav({children, totalSlides, displaySlides}) {

  const FirstInitFlag = useRef(true);
  // const [showStartSpace, setShowStartSpace] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 1,
    mode: "free-snap",
    drag: false,
    slides: {
      origin: 'center',
      perView: 3.5,
      spacing: 5,
    },
    animation: {
      duration: 1000 // 動畫持續時間(毫秒)
    },
    created() {
      setLoaded(true)
      console.log(instanceRef.current);
    },
    slideChanged() {
      if (FirstInitFlag.current) {
        FirstInitFlag.current = false;
        setIsLoop(true);
        return;
      }
    }
  }
);

  return (
    <div className='navigation-wrapper w-full relative group'>
      <div ref={sliderRef} className={clsx(
          'keen-slider w-full'
        )}>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <>
          {isLoop &&
          <SwitchButton 
            direction='left' 
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            // disabled={currentSlide === 0}
          />
          }
          <SwitchButton 
            direction='right' 
            onClick={(e) => {
              const currentSlide = instanceRef.current.track.details.abs;
              const currentOptions = instanceRef.current.options;
              // console.log(instanceRef.current.options);
              e.stopPropagation() || 
              instanceRef.current?.moveToIdx(currentSlide + 2); 
              // instanceRef.current?.next();
              // if(FirstInitFlag.current) {
              //   FirstInitFlag.current = false;
              //   instanceRef.current?.update({...currentOptions, loop: true});
              //   setIsLoop(true);
              // }
            }}
            disabled={currentSlide ===
              instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )}
    </div>
  );
};

SnapSliderNav.propTypes = {
    children: PropTypes.node.isRequired,
    totalSlides: PropTypes.number.isRequired,
    displaySlides: PropTypes.number.isRequired,
};


const SwitchButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      className={clsx(
        'absolute top-1/2 transform -translate-y-1/2 bg-grey-600 invisible rounded-full',
        direction === 'left' ? 'left-10' : 'right-10',
        disabled ? 'text-white-300' : 'text-white',
        'group-hover:visible'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon 
        path={direction === 'left' ? mdiChevronLeft : mdiChevronRight}
        size={2}
      />
    </button>
  )
}

SwitchButton.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}
