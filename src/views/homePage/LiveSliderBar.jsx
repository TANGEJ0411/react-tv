import { useState } from "react";
import SnapSliderNav from "../../components/SnapSliderNav";
import PropTypes from "prop-types";
import LiveSliderItem from "../../components/LiveSliderItem";

export default function LiveSliderBar({displaySlides}) {

    const [isInvisible, setIsInvisible] = useState(true);

    return (
        <>
            <div className="mb-[12px] flex items-end justify-between px-[4px] pt-[24px] ps-[84px]">
                <h2 className="text-[20px] font-[700] text-white">Channel 24小時直播中</h2>
            </div>
            <SnapSliderNav setIsInvisible={setIsInvisible} displaySlides={displaySlides}>
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem />
                <LiveSliderItem isInvisible={isInvisible}/>
            </SnapSliderNav>
        </>
    )
}

LiveSliderBar.propTypes = {
    displaySlides: PropTypes.number.isRequired,
};