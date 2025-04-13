import { Carousel, Nav } from "@/components/Carousel";
import React, { useState, useRef, useEffect } from "react";
import {BlogCard} from "@/components/Card";
import {Api} from "@/assets/api/api";
export default function BlogSection() {
    const api = Api({}).init();
    const blogCarouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const renderedBlogs = blogs.map(blog=>{
        return <BlogCard
            key = {blog.id}
            content = {blog.content}
            title = {blog.title}
            imgUrl = {blog.imgUrl}
            date = {blog.createdAt}
            field = {blog.field}
        />
    })
    async function fetchBlogs(){
        const response = await api.get('blogs');
        setBlogs(response);
    }
    useEffect(()=>{
        fetchBlogs();
    },[])
    function handleBlogSliderChange(current) {
        const slickInstance = blogCarouselRef.current.innerSlider; // Lấy instance của Slick Carousel
        const slidesToScroll = slickInstance.props.slidesToScroll || 1; // Lấy slidesToScroll từ instance
        const dotIndex = Math.floor(current / slidesToScroll); // Tính toán dot index
        setCurrentSlide(dotIndex); // Cập nhật trạng thái dot hiện tại

    }

    const blogLeftNav = <Nav
        onClick={() => blogCarouselRef.current.slickPrev()}
        customClass="rounded-full bg-transparent ring-primary/70 cursor-pointer hover:ring-primary ring-2 flex items-center justify-center w-[26px] h-[26px]">
        <span className="text-primary/70 hover:text-primary">&lt;</span>
    </Nav>

    const blogRightNav = <Nav
        onClick={() => blogCarouselRef.current.slickNext()}
        customClass="rounded-full bg-transparent ring-primary/70 cursor-pointer hover:ring-primary ring-2 flex items-center justify-center w-[26px] h-[26px]">
        <span className="text-primary/70 hover:text-primary">&gt;</span>
    </Nav>
    const customDotsWrapper = (dots) => {
        return (
            <div
                style={{
                    width: "auto",
                    marginTop: "32px",
                    position: "static",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px", // Khoảng cách giữa các thành phần
                }}
            >
                {blogLeftNav}
                <ul style={{ display: "flex", margin: "0", padding: "0", listStyle: "none" }}>
                    {React.Children.map(dots, (dot, i) => {
                        if (!blogCarouselRef.current) return null;
                        const slickInstance = blogCarouselRef.current.innerSlider;
                        const slidesToScroll = slickInstance.props.slidesToScroll || 1;
                        return <li className={`!h-[10px] transition-all rounded-full hover:bg-primary ${currentSlide === i ? 'bg-primary !w-[20px]' : 'bg-primary/70 !w-[10px]'}`} onClick={() => { blogCarouselRef.current?.slickGoTo(i * slidesToScroll) }}></li>
                    })}
                </ul>
                {blogRightNav}
            </div>
        )
    };
    const blogsSettings = {
        speed: 500,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: handleBlogSliderChange,
        appendDots: customDotsWrapper,
        responsive: [
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
        <section className="blog-section pb-10">
            <div className="container px-4">
                <h1 className="heading-1 mb-4">Blog</h1>
                <Carousel ref={blogCarouselRef} settings={blogsSettings}>
                    {renderedBlogs}
                </Carousel>
            </div>
        </section>

    )
}
