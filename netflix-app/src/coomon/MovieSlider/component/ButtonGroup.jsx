import './ButtonGroup.style.css';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>{`<`}</div>
            <div onClick={() => next()} >{`>`}</div>
        </div>
    );
};

export default ButtonGroup;