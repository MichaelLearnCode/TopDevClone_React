
import { JobCard } from '@/components/Card';
import { Carousel } from '@/components/Carousel';
import { Button } from '@/components/Button';
import {Api} from "@/assets/api/api";
import { useEffect, useState } from 'react';

export default function ProposeSection() {

    const api = Api({}).init();
    const [jobs, setJobs] = useState([]);
    async function fetchJobs() {
        const response = await api.get('jobs',{limit: 10});
        setJobs(response);
    }
    useEffect(() => {
        fetchJobs();
    }, [])

    const renderedJobs = jobs.map(job => {
        return <JobCard
            className="bg-white"
            key={job.id}
            title={job.title}
            thumbnail={job.thumbnail}
            description={job.description}
            salary={job.salary}
            type={job.type}
            locationType={job.locationType}
        />
    })

    const advertiseSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true
    };

    const proposeSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className="py-[80px]">
            <div className="md:container md:px-4">
                <div className="grid grid-cols-24 gap-0 xl:gap-[48px]">
                    <div className="col-span-24 xl:col-span-4 mb-[32px] xl:mb-0">
                        <div className="container px-4">
                            <div className="flex flex-col  w-full">
                                <h2 className="heading-2 mb-5">Danh mục</h2>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-1">

                                    <Button variant="contained" className="py-[8px] px-[16px] w-full small-headline">
                                        Việc làm IT
                                    </Button>
                                    <Button variant="contained" className="py-[8px] px-[16px] w-full small-headline">
                                        Tạo CV
                                    </Button>
                                    <Button variant="contained" className="py-[8px] px-[16px] w-full small-headline">
                                        Công ty IT
                                    </Button>
                                    <Button variant="contained" className="py-[8px] px-[16px] w-full small-headline">
                                        Trắc nghiệm tính cách
                                    </Button>
                                    <Button variant="contained" className="py-[8px] px-[16px] w-full small-headline">
                                        Blog
                                    </Button>
                                    <Button variant="contained" className="py-[8px] px-[16px] w-full small-headline">
                                        Việc làm IT <span className="text-primary">Fresher</span>
                                    </Button>
                                </div>
                                <a
                                    href="#"
                                    className="small-headline py-2 text-decoration-none text-dark text-center text-md-start"
                                >
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-24 xl:col-span-14 mb-[32px] xl:mb-0">
                        <div className="w-full">
                            <div className="container px-4">
                                <h2 className="heading-2 mb-5">Công ty nổi bật</h2>
                            </div>
                            <div className="">
                                <Carousel settings={advertiseSettings}>
                                    <div className="border-neutral-gray-3 border-1 h-[68px] relative px-[6px] rounded-[10px] inline-flex flex-center">
                                        <img
                                            className='object-contain'
                                            width={150}
                                            src="/assets/image/spotlight-section/logo/img_logo_applancer.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-neutral-gray-3 border-1 h-[68px] relative px-[6px] rounded-[10px] inline-flex flex-center">
                                        <img
                                            className='object-contain'
                                            width={100}
                                            src="/assets/image/spotlight-section/logo/img_logo_tdtasia.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-neutral-gray-3 border-1 h-[68px] relative px-[6px] rounded-[10px] inline-flex flex-center">
                                        <img
                                            className='object-contain'
                                            width={150}
                                            src="/assets/image/spotlight-section/logo/img_logo_talentsuccess.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-neutral-gray-3 border-1 h-[68px] relative px-[6px] rounded-[10px] inline-flex flex-center">
                                        <img
                                            className='object-contain'
                                            width={141}
                                            src="/assets/image/spotlight-section/logo/img_logo_viettel.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-neutral-gray-3 border-1 h-[68px] relative px-[6px] rounded-[10px] inline-flex flex-center">
                                        <img
                                            className='object-contain'
                                            width={60}
                                            src="/assets/image/spotlight-section/logo/img_logo_acb.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-neutral-gray-3 border-1 h-[68px] relative px-[6px] rounded-[10px] inline-flex flex-center">
                                        <img
                                            className='object-contain'
                                            width={80}
                                            src="/assets/image/spotlight-section/logo/img_logo_chotot.png"
                                            alt=""
                                        />
                                    </div>
                                </Carousel>
                                <div className="container px-4">
                                    <div className="mt-4">
                                        <div className="tab-content grid grid-cols-24 gap-x-4">
                                            <div className="col-span-24 md:col-span-16">
                                                <div className="img-wrapper w-full">
                                                    <img
                                                        width="100%"
                                                        src="/assets/image/spotlight-section/thumb-job/img_thumb_mgm_job.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-24 md:col-span-8">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="">
                                                        <h1 className="heading-1 text-primary">
                                                            mgm technology partners Vietnam
                                                        </h1>
                                                        <div className="display-2 text-primary mt-4">
                                                            Up to 5000$
                                                        </div>
                                                        <div className="description text-medium mt-4">
                                                            {" "}
                                                            Đà Nẵng, Hồ Chí Minh
                                                        </div>
                                                    </div>
                                                    <div className="heading-2 text-primary text-end">
                                                        8 Jobs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-24 xl:col-span-6">
                        <div className="container px-4 md:px-0">
                            <h2 className="heading-2 mb-4">Đề xuất cho bạn</h2>
                            <Carousel settings={proposeSettings}>
                                {renderedJobs}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
