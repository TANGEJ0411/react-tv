import clsx from 'clsx';
import 'video.js/dist/video-js.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function DramaSliderItem({isInvisible}) {

    const [showHoverItem, setShowHoverItem] = useState(false);

  return (
    <>
        <div className={clsx("w-1/2 cursor-pointer keen-slider__slide keen-slider_visible relative hover:z-10", isInvisible ? "invisible" : "visible")}
            onMouseOver={() => setShowHoverItem(true)}
            onMouseLeave={() => setShowHoverItem(false)}
        >
            <div className="relative h-full rounded-lg bg-[rgba(0,0,0,0.4)] hover:scale-[1.5] hover:-translate-y-3/4 duration-300">
                <figure className="relative aspect-video overflow-hidden rounded-lg bg-black">
                    <img alt="好運來" loading="lazy" srcSet="https://img.linetv.tw/medium/drama/17005-b_241223.png 1x, https://img.linetv.tw/medium/drama/17005-b_241223.png 2x" className="aspect-ratio-content" />
                </figure>
                {showHoverItem && (
                    <div className="absolute p-2 bg-black bg-opacity-50">
                        <p className="text-white">
                        好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來好運來
                        </p>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default DramaSliderItem

DramaSliderItem.propTypes = {
    isInvisible: PropTypes.bool.isRequired,
};