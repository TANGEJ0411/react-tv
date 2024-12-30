import { useEffect, useRef } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import PropTypes from "prop-types";
import clsx from "clsx";

// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

function LiveSliderItem({isInvisible}) {

    const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };


  return (
    <div className={clsx("w-1/2 cursor-pointer keen-slider__slide keen-slider_visible relative hover:z-10", isInvisible ? "invisible" : "visible")}>
      <div className="relative flex h-full rounded-lg bg-[rgba(0,0,0,0.4)] hover:scale-[1.2] duration-300">
        <figure className="relative aspect-video flex-[0_0_64%] overflow-hidden rounded-l-lg bg-black">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </figure>
        <div className="text-white p-4">
            <div>直播中</div>
            <p>現在播出:</p>
            <p>即將播出:</p>
        </div>
      </div>
    </div>
  )
}

export default LiveSliderItem;

LiveSliderItem.propTypes = {
  isInvisible: PropTypes.bool.isRequired,
}

const VideoJS = (options, onReady) => {
    
    const videoRef = useRef(null);

    const playerRef = useRef(null);

    useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
          // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
          const videoElement = document.createElement("video-js");
    
          videoElement.classList.add('vjs-big-play-centered');
          videoRef.current.appendChild(videoElement);
    
          const player = playerRef.current = videojs(videoElement, options, () => {
            videojs.log('player is ready');
            onReady && onReady(player);
          });
    
        // You could update an existing player in the `else` block here
        // on prop change, for example:
        } else {
          const player = playerRef.current;
    
          player.autoplay(options.autoplay);
          player.src(options.sources);
        }
      }, [onReady, options, videoRef]);

      useEffect(() => {
        const player = playerRef.current;
    
        return () => {
          if (player && !player.isDisposed()) {
            player.dispose();
            playerRef.current = null;
          }
        };
      }, [playerRef]);

      return (
        <div className="data-vjs-player">
          <div ref={videoRef} />
        </div>
      );
}

VideoJS.propTypes = {
    options: PropTypes.object.isRequired,
    onReady: PropTypes.func,
};