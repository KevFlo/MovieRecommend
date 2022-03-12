import "./slider.css";

const Slider = (props) => {
    return (
        <div className="slider">
            <div className="slides-list">
                {props.children}
            </div>
        </div>
    )
}

export default Slider;