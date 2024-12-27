import { useState } from "react";
import SnapSliderNav from "../../components/SnapSliderNav";
import PropTypes from "prop-types";
import DramaSliderItem from "../../components/DramaSliderItem";

export default function DramaSliderBar({displaySlides}) {

    const [isInvisible, setIsInvisible] = useState(true);

    return (
        <>
            <div className="mb-[12px] flex items-end justify-between px-[4px] pt-[24px] ps-[84px]">
                <h2 className="text-[20px] font-[700] text-white">現正熱播中</h2>
            </div>
            <SnapSliderNav setIsInvisible={setIsInvisible} displaySlides={displaySlides}>
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem />
                <DramaSliderItem isInvisible={isInvisible}/>
            </SnapSliderNav>
        </>
    )
}

DramaSliderBar.propTypes = {
    displaySlides: PropTypes.number.isRequired,
};