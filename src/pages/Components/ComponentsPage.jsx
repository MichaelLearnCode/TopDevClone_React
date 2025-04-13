import { Button } from "@/components/Button";
import { JobCard, BlogCard } from "@/components/Card";
import { Carousel, Nav } from "@/components/Carousel";
import {Dropdown} from "@/components/Dropdown";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ComponentsPage() {
  const blogCarouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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
            return <li className={`!h-[10px] transition-all rounded-full hover:bg-primary ${currentSlide === i? 'bg-primary !w-[20px]' : 'bg-primary/70 !w-[10px]'}`} onClick={() => { blogCarouselRef.current?.slickGoTo(i * slidesToScroll) }}></li>
          })}
        </ul>
        {blogRightNav}
      </div>
    )
  };

  let hotJobSettings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Nav customClass='z-1 cursor-pointer rounded-full d-block flex items-center justify-center bg-neutral-gray-6/80 hover:bg-neutral-gray-6/100 absolute top-[50%] right-[5%] translate-y-[-50%] w-[48px] h-[48px]'><span className='text-2xl text-white'>&gt;</span></Nav>,
    prevArrow: <Nav customClass='z-1 cursor-pointer rounded-full d-block flex items-center justify-center bg-neutral-gray-6/80 hover:bg-neutral-gray-6/100 absolute top-[50%]  left-[5%] translate-y-[-50%] w-[48px] h-[48px]'><span className='text-2xl text-white'>&lt;</span></Nav>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
    ]
  };

  let blogsSettings = {
    speed: 500,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    afterChange: handleBlogSliderChange,
    appendDots: customDotsWrapper,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
    ]
  };

  const dropdownItems = [
    {
      id:1,
      value: "Hanoi",
    },
    {
      id:2,
      value: "Ha Long"
    },
    {
      id:3,
      value: "Da Nang"
    }
  ]

  const dropdownItems2 = [
    {
      id: 1,
      value: "Profile"
    },
    {
      id: 2,
      value: "Logout"
    }
  ]




  return (
    <div>
      <div className="container">
        <h1 className="text-center heading-1 mb-[15px]">Buttons</h1>
        <Button variant='text'>Text</Button>
        <Button className='ms-5' variant='contained'>Contained</Button>
        <Button className='ms-5' variant='outlined'>Outlined</Button>
        <br />
        <Button color='primary' variant='text'>Text</Button>
        <Button color='primary' className='ms-5' variant='contained'>Contained</Button>
        <Button color='primary' className='ms-5' variant='outlined'>Outlined</Button>
        <br />
        <Button color='success' variant='text'>Text</Button>
        <Button color='success' className='ms-5' variant='contained'>Contained</Button>
        <Button color='success' className='ms-5' variant='outlined'>Outlined</Button>
        <br />
        <Button color='dark' variant='text'>Text</Button>
        <Button color='dark' className='ms-5' variant='contained'>Contained</Button>
        <Button color='dark' className='ms-5' variant='outlined'>Outlined</Button>
      </div>
      <div className="container mt-[30px]">
        <JobCard />
      </div>
      <div className="container mt-[30px]">
        <BlogCard className='w-2/4' />
      </div>
      <div className="container mt-[30px]">
        <Carousel settings={hotJobSettings}>
        <JobCard />
        <JobCard />
        <JobCard />
        </Carousel>
      </div>
      <div className="container mt-[30px]">
        <Carousel ref={blogCarouselRef} settings={blogsSettings}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </Carousel>
      </div>
      <div className="container mt-[30px]">
        <Dropdown data = {dropdownItems} listClass = "shadow-sm" itemClass = "bg-transparent ps-[20px]" leftIcon = {<FaLocationDot/>} size = "xl" className = "w-[163px]">Dropdown</Dropdown>
      </div>
      <div className="container mt-[30px]">
        <Dropdown data = {dropdownItems2} variant = "dark" itemClass = "bg-dark ps-[20px]" leftIcon = {<FaLocationDot/>} size = "xl" className = "w-[163px]">Dropdown</Dropdown>
      </div>
      <div className="py-[100px]"></div>
    </div>
  )
}
