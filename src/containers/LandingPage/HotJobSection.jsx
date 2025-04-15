import { Carousel, Nav } from '@/components/Carousel';
import { JobCard, SkeletonJobCard } from '@/components/Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {Api} from "@/assets/api/api";
import { useEffect, useState, useMemo } from 'react';
export default function HotJobSection() {
    const api = Api({}).init();
    const [jobs, setJobs] = useState([]);
    const [isLoadingJobs, setIsLoadingJobs] = useState(false);
    async function fetchJobs(){
        setIsLoadingJobs(true);
        const response = await api.get('jobs');
        setIsLoadingJobs(false);
        setJobs(response);
    }
    useEffect(()=>{
        fetchJobs();
    },[])
    const renderedSkeletonJobs = useMemo(()=>{
        const array = [];
        for(let i = 0;i<6;i++){
            array.push(<SkeletonJobCard/>)
        }
        return array
    },[])  
    const renderedJobs = jobs.map(job=>{
        return <JobCard
            className = "bg-white"
            key = {job.id}
            title = {job.title}
            thumbnail = {job.thumbnail}
            description = {job.description}
            salary = {job.salary}
            type = {job.type}
            locationType = {job.locationType}
        />
    })

    const hotJobSettings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <Nav customClass='z-1 cursor-pointer rounded-full d-block flex items-center justify-center bg-neutral-gray-6/80 hover:bg-neutral-gray-6/100 absolute top-[50%]  left-[5%] translate-y-[-50%] w-[48px] h-[48px]'><FaAngleLeft className = "text-white"/></Nav>,
        nextArrow: <Nav customClass='z-1 cursor-pointer rounded-full d-block flex items-center justify-center bg-neutral-gray-6/80 hover:bg-neutral-gray-6/100 absolute top-[50%] right-[5%] translate-y-[-50%] w-[48px] h-[48px]'><FaAngleRight className = "text-white"/></Nav>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="border-t-1 border-b-1 border-primary bg-[linear-gradient(90deg,rgba(235,39,2,0.1)_3.5%,rgba(255,125,37,0.1)_75%,rgba(255,157,90,0.1)_100%)]">
            <div className="py-4">
                <h1 className="pt-[32px] pb-4 w-full text-center gradient-text heading-1">
                    Công Việc Hot Hôm Nay
                </h1>
                <Carousel
                    className="pt-4 mb-[48px]"
                    settings={hotJobSettings}>
                    {isLoadingJobs? renderedSkeletonJobs:renderedJobs }
                </Carousel>
            </div>
        </section>
    )
}
