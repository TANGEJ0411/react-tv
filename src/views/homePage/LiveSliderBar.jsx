import { useState } from "react";
import SnapSliderNav from "../../components/SnapSliderNav";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function LiveSliderBar({displaySlides}) {

    const [isInvisible, setIsInvisible] = useState(true);

    return (
        <>
            <div className="mb-[12px] flex items-end justify-between px-[4px] pt-[24px] ps-[84px]">
                <h2 className="text-[20px] font-[700] text-white">Channel 24小時直播中</h2>
            </div>
            <SnapSliderNav setIsInvisible={setIsInvisible} displaySlides={displaySlides}>
                <div className="flex items-stretch keen-slider__slide h-32 w-2/4 bg-primary">1
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
                <div className="flex keen-slider__slide h-32 w-2/4 bg-negative">2
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
                <div className="flex keen-slider__slide h-32 w-2/4 bg-disable">3
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
                <div className="flex keen-slider__slide h-32 w-2/4 bg-blue">4
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
                <div className="flex keen-slider__slide h-32 w-2/4 bg-yellow">5
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
                <div className="flex keen-slider__slide h-32 w-2/4 bg-violet">6
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
                <div className={clsx("flex keen-slider__slide h-32 w-2/4 bg-coral", isInvisible ? "invisible" : "visible")}>7
                    {/* <div className="bg-white mx-2 flex-auto">1</div>
                    <div className="bg-white mx-2 flex-auto">2</div>
                    <div className="bg-white mx-2 flex-auto">3</div> */}
                </div>
            </SnapSliderNav>
        </>
    )
}

LiveSliderBar.propTypes = {
    displaySlides: PropTypes.number.isRequired,
};