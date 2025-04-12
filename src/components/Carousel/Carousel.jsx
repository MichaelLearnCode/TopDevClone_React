
import Slider from "react-slick";

export default function Carousel(props) {
    const {
        ref = null,
        className = '',
        item,
        settings,
        margin = 10

    } = props;
    const renderedItems = [];
    for (let i = 0; i < 8; i++) {
        renderedItems.push(
        <div>
            <div style={{ marginLeft: margin + 'px', marginRight: margin + 'px' }}>
                {item}
            </div>
        </div>);
    }
    return (
        <Slider ref = {ref} className={`relative ${className}`} {...settings}>
            {renderedItems}
        </Slider>
    );
}