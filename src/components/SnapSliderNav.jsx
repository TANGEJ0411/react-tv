import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

export default function SnapSliderNav({children, displaySlides, setIsInvisible}) {

  const FirstInitFlag = useRef(true);
  const [isLoop, setIsLoop] = useState(false);
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: Math.floor(displaySlides / 2),
    mode: "free-snap",
    drag: false,
    slides: {
      origin: 'center',
      perView: displaySlides,
      spacing: 10,
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
    <div className='navigation-wrapper w-full group relative'>
      <div ref={sliderRef} className={clsx(
          'keen-slider w-full keen-slider_visible'
        )}>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <>
          {isLoop &&
          <SwitchButton 
            direction='left' 
            onClick={(e) => {
              const currentSlide = instanceRef.current.track.details.abs;
              e.stopPropagation() || instanceRef.current?.moveToIdx(currentSlide - 2);
            }}
          />
          }
          <SwitchButton 
            direction='right' 
            onClick={(e) => {
              const currentSlide = instanceRef.current.track.details.abs;
              e.stopPropagation() || 
              instanceRef.current?.moveToIdx(currentSlide + 2); 
              // instanceRef.current?.next();
              if(FirstInitFlag.current) {
                FirstInitFlag.current = false;
                setIsInvisible(false);
                setIsLoop(true);
              }
            }}
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
    setIsInvisible: PropTypes.func.isRequired,
};


const SwitchButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      className={clsx(
        'absolute top-1/2 transform -translate-y-1/2 bg-grey-600 invisible rounded-full z-21',
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
  disabled: PropTypes.bool,
}
