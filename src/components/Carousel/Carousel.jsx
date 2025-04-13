
import Slider from "react-slick";

export default function Carousel(props) {
    const {
        ref = null,
        className = '',
        children,
        settings,
        margin = 10

    } = props;
    const renderedItems = [];
    children.forEach(item => {
        renderedItems.push(
            <div>
                <div style={{ marginLeft: margin + 'px', marginRight: margin + 'px' }}>
                    {item}
                </div>
            </div>);
    })
    return (
        <Slider ref={ref} className={`relative ${className}`} {...settings}>
            {renderedItems}
        </Slider>
    );
}