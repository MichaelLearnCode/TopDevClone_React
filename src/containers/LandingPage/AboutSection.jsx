
export default function AboutSection() {
    return (
        <section className="pt-[48px] pb-[32px]">
            <div className="container px-4">
                <div className="flex flex-col md:flex-col-reverse">
                    <div className="grid grid-cols-24 gap-x-0 md:gap-x-2 lg:gap-x-3 xl:gap-x-4 2xl:gap-x-6">
                        <div className="col-span-24 md:col-span-8">
                            <img
                                src="/assets/image/header/img_logo.png"
                                width={202}
                                height={38}
                                alt="top dev logo"
                            />
                            <div className="small-headline mt-4">
                                Tầng 12A, Toà nhà AP Tower, 518B Điện Biên Phủ, Phường 21, Quận Bình
                                Thạnh, Thành phố Hồ Chí Minh
                            </div>
                            <div className="small-headline mt-4">
                                Copyright © CÔNG TY CỔ PHẦN APPLANCER
                            </div>
                            <div className="small-headline mt-4">
                                Liên Hệ: 028 6273 3496 - contact@topdev.vn
                            </div>
                            <div className="small-headline mt-4">
                                ĐKKD : 031 303 2338 - Cấp ngày : 27/11/2014
                            </div>
                            <img
                                width={114}
                                height={43}
                                src="/assets/image/footer/img_validate_brand.png"
                                alt=""
                                className="mt-4"
                            />
                        </div>
                        <div className="col-span-24 md:col-span-4 mt-6 md:mt-0">
                            <div className="">
                                <div className="sub-heading flex items-center">
                                    <span>VỀ TOPDEV</span>
                                    <span className="text-[1.3rem] ms-2 md:hidden">
                                        +
                                    </span>
                                </div>
                                <ul className=" mt-4 bg-transparent static md:block">
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Về chúng tôi
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Liên hệ
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Thoả thuận sử dụng
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Cơ hội việc làm
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Quy định bảo mật
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Quy chế hoạt động của sàn giao dịch thương mại điện tử TOPDEV
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Giải quyết khiếu nại
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Ứng dụng Di Động
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-24 md:col-span-4 mt-6 md:mt-0">
                            <div className="">
                                <div className="sub-heading flex items-center">
                                    <span>ỨNG VIÊN</span>
                                    <span className="text-[1.3rem] ms-2 md:hidden">
                                        +
                                    </span>
                                </div>
                                <ul className=" mt-4 bg-transparent static md:block">
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Tính lương Gross - Net
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Tạo CV
                                        </a>
                                    </li>
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Tìm kiếm công việc IT
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Trắc nghiệm tính cách
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-24 md:col-span-4 mt-6 md:mt-0">
                            <div className="">
                                <div className="sub-heading flex items-center">
                                    <span>NHÀ TUYỂN DỤNG</span>
                                    <span className="text-[1.3rem] ms-2 md:hidden">
                                        +
                                    </span>
                                </div>
                                <ul className=" mt-4 bg-transparent static md:block">
                                    <li className="mb-1 md:mb-3">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Đăng việc làm IT
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            className="no-underline small-headline text-dark"
                                            href="#"
                                        >
                                            Tìm kiếm nhân tài
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-24 md:col-span-4 mt-6 md:mt-0">
                            <div className="flex items-center md:items-start flex-col">
                                <div className="body-2 mb-3">Theo dõi chúng tôi tại</div>
                                <div className="">
                                    <div className="flex gap-3">
                                        <a className="no-underline" href="#">
                                            <img
                                                width={32}
                                                height={32}
                                                src="/assets/image/footer/logo/img_logo_facebook.png"
                                                alt=""
                                            />
                                        </a>
                                        <a className="no-underline" href="#">
                                            <img
                                                width={32}
                                                height={32}
                                                src="/assets/image/footer/logo/img_logo_telegram.png"
                                                alt=""
                                            />
                                        </a>
                                        <a className="no-underline" href="#">
                                            <img
                                                width={32}
                                                height={32}
                                                src="/assets/image/footer/logo/img_logo_twitter.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="flex gap-3 mt-2">
                                        <a className="no-underline" href="#">
                                            <img
                                                width={32}
                                                height={32}
                                                src="/assets/image/footer/logo/img_logo_linkin.png"
                                                alt=""
                                            />
                                        </a>
                                        <a className="no-underline" href="#">
                                            <img
                                                width={32}
                                                height={32}
                                                src="/assets/image/footer/logo/img_logo_tiktok.png"
                                                alt=""
                                            />
                                        </a>
                                        <a className="no-underline" href="#">
                                            <img
                                                width={32}
                                                height={32}
                                                src="/assets/image/footer/logo/img_logo_insta.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="body-2 mt-3">TẢI ỨNG DỤNG TOPDEV NGAY</div>
                                <div className="mt-3 grid grid-cols-2 gap-x-4">
                                    <div className="">
                                        <img
                                            className="d-block"
                                            src="/assets/image/footer/img_qr_app.png"
                                            width="100%"
                                            alt=""
                                        />
                                    </div>
                                    <div className="">
                                        <div className="h-full flex flex-col justify-between">
                                            <img
                                                src="/assets/image/footer/img_appstore.png"
                                                width="100%"
                                                alt=""
                                            />
                                            <img
                                                src="/assets/image/footer/img_chplay.png"
                                                width="100%"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 md:py-6 xl:py-[32px] 2xl:py-[48px]" />
                    <hr className="block h-[1px] border-t-[1px] border-[#ccc] p-0 m-0" />
                    <div className="py-4 md:py-6 xl:py-[32px] 2xl:py-[48px]" />
                    <div className="">
                        <div className="mb-6">
                            <h4 className="sub-heading mb-2">TOP VIỆC LÀM CHO FRESHER</h4>
                            <p className="description-small">
                                Việc làm Fresher Java / Việc làm Fresher Javascript / Việc làm
                                Fresher PHP / Việc làm Fresher Python / Việc làm Fresher ReactJS /
                                Việc làm Fresher NodeJS / Việc làm Fresher C/C++ / Việc làm Fresher
                                Tester / Việc làm Fresher Frontend / Việc làm Fresher Backend
                            </p>
                        </div>
                        <div className="mb-6">
                            <h4 className="sub-heading mb-2">VIỆC LÀM THEO NGHÀNH NGHỀ</h4>
                            <p className="description-small">
                                Việc làm IT ngành Outsourcing / Việc làm IT ngành Product / Việc làm
                                IT ngành Ngân hàng / Việc làm IT ngành Viễn thông / Việc làm IT
                                ngành Game / Giải trí / Việc làm IT ngành Fintech / Việc làm IT
                                ngành Phần cứng / Việc làm IT ngành Phần mềm / Việc làm IT ngành
                                Quảng cáo truyền thông / Việc làm IT ngành Dịch vụ IT
                            </p>
                        </div>
                        <div className="">
                            <h4 className="sub-heading mb-2">CÔNG TY HOT THEO NGHÀNH NGHỀ</h4>
                            <p className="description-small">
                                Công ty Outsourcing / Công ty ngành Phần Mềm / Công ty ngành Phần
                                cứng / Công ty ngành Product / Công ty ngành Ngân hàng / Công ty
                                ngành Viễn thông / Công ty ngành Game / Giải trí / Công ty ngành
                                Quảng Cáo Truyền Thông / Công ty ngành Dịch vụ IT / Công ty ngành
                                Fintech
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
