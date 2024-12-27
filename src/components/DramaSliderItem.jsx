import clsx from 'clsx';
import 'video.js/dist/video-js.css';
import PropTypes from 'prop-types';

// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

function DramaSliderItem({isInvisible}) {

  return (
    <div className={clsx("w-1/2 cursor-pointer keen-slider__slide keen-slider_visible relative hover:z-20", isInvisible ? "invisible" : "visible")}>
      <div className="relative flex h-full rounded-lg bg-[rgba(0,0,0,0.4)] hover:scale-[1.2] duration-300">
        <figure className="relative aspect-video overflow-hidden rounded-lg bg-black">
        <img alt="好運來" loading="lazy" srcSet="https://img.linetv.tw/medium/drama/17005-b_241223.png 1x, https://img.linetv.tw/medium/drama/17005-b_241223.png 2x" className="aspect-ratio-content" />
        </figure>
      </div>
    </div>
  )
}

export default DramaSliderItem

DramaSliderItem.propTypes = {
    isInvisible: PropTypes.bool.isRequired,
};