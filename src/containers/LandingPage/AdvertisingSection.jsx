import { Carousel } from '@/components/Carousel';

export default function AdvertisingSection() {
    const advertiseSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth:true
    };
    return (
        <div className="pb-[32px] pt-[48px]">
            <div className="container px-4 mb-[32px]">
                <h1 className="heading-1 gradient-text">Nhà tuyển dụng hàng đầu</h1>
            </div>
            <Carousel settings = {advertiseSettings}>
                <div className="h-[60px] inline-flex items-center justify-center">
                    <img className = "object-fit"
                        src="/assets/image/spotlight-section/logo/img_logo_applancer.png"
                        alt=""
                    />
                </div>
                <div className="h-[60px] flex items-center justify-center">
                    <img className = "object-fit"
                        src="/assets/image/spotlight-section/logo/img_logo_tdtasia.png"
                        alt=""
                    />
                </div>
                <div className="h-[60px] flex items-center justify-center">
                    <img className = "object-fit"
                        src="/assets/image/spotlight-section/logo/img_logo_talentsuccess.png"
                        alt=""
                    />
                </div>
                <div className="h-[60px] flex items-center justify-center">
                    <img className = "object-fit"
                        src="/assets/image/spotlight-section/logo/img_logo_viettel.png"
                        alt=""
                    />
                </div>
                <div className="h-[60px] flex items-center justify-center">
                    <img className = "object-fit"
                        src="/assets/image/spotlight-section/logo/img_logo_acb.png"
                        alt=""
                    />
                </div>
                <div className="h-[60px] flex items-center justify-center">
                    <img className = "object-fit"
                        src="/assets/image/spotlight-section/logo/img_logo_chotot.png"
                        alt=""
                    />
                </div>
            </Carousel>
        </div>

    )
}
