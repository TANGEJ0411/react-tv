import SnapSliderNav from "../../components/SnapSliderNav";

export default function LiveSliderBar() {

    return (
        <SnapSliderNav>
            <div className="flex items-stretch keen-slider__slide h-32 w-72 bg-primary">1
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
            <div className="flex keen-slider__slide h-32 w-72 bg-negative">2
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
            <div className="flex keen-slider__slide h-32 w-72 bg-disable">3
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
            <div className="flex keen-slider__slide h-32 w-72 bg-blue">4
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
            <div className="flex keen-slider__slide h-32 w-72 bg-yellow">5
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
            <div className="flex keen-slider__slide h-32 w-72 bg-violet">6
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
            <div className="flex keen-slider__slide h-32 w-72 bg-coral invisible">7
                {/* <div className="bg-white mx-2 flex-auto">1</div>
                <div className="bg-white mx-2 flex-auto">2</div>
                <div className="bg-white mx-2 flex-auto">3</div> */}
            </div>
        </SnapSliderNav>
    )
}