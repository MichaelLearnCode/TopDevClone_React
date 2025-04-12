import { Dropdown } from "@/components/Dropdown";
import {Button} from "@/components/Button";
export default function HeroSection() {
    return (
        <section className="hero-section my-10 py-14">
            <div className="container px-4">
                <div className="grid grid-cols-24 justify-center">
                    <div className="col-span-20 col-start-3 md:col-span-12 md:col-start-7 xl:col-span-10 xl:col-start-8">
                        <img
                            src="/assets/image/hero-section/img_banner.png"
                            alt=""
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="py-10">
                    <form id="hero-section-search-form" action="">
                        <div className="grid grid-cols-24 justify-center">
                            <div className="col-span-24 md:col-span-20 md:col-start-3 lg:col-span-18 lg:col-start-4 xl:col-span-16 xl:col-start-5">
                                <div className="gap-2 md:relative flex w-full flex-col md:flex-row md:items-center md:justify-center">
                                    <div className="relative md:static flex-1">
                                        <input
                                            className="w-full p-[12px_4px_12px_79px] rounded-[12px] border-0 bg-neutral-gray-1 font-[400] text-[16px] leading-[1.4]"
                                            type="text"
                                            placeholder="Công việc bạn đang tìm ?"
                                        />
                                        <ul className="search-suggestion w-full bg-white shadow"></ul>
                                        <span className="absolute left-[39px] top-[50%] translate-y-[-50%]">
                                            <img
                                                width={20}
                                                height={20}
                                                src="/assets/image/hero-section/icon/img_icon_search.png"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div className="mt-2 md:mt-0 gap-2 flex items-center">
                                        <Dropdown
                                            listClass = "rounded-[12px] py-[13px] px-[30px]"
                                            leftIcon = {<img
                                                width={21}
                                                height={21}
                                                src="/assets/image/spotlight-section/icon/img_icon_location.png"
                                                alt=""/>}
                                        >
                                            Vị trí
                                        </Dropdown>
                                        <Button className="btn button-label flex-1 py-[13px] " variant = "contained" color = "dark">
                                            Tìm kiếm
                                        </Button>
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <Button className="small-headline py-2 px-4 !text-black" variant = "outlined" color = "primary">
                        New Job
                    </Button>
                    <Button className="small-headline py-2 px-4 !text-black" variant = "outlined" color = "primary">
                        Part Time
                    </Button>
                </div>
            </div>
        </section>

    )
}
