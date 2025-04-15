import { Dropdown } from "@/components/Dropdown";
import { Modal } from "@/components/Modal";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import { Api } from "@/assets/api/api";
import { zodResolver } from "@hookform/resolvers/zod";
export default function HeaderSection() {

  const [isShowModal, setIsShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const api = Api({}).init();

  useEffect(() => {
    fetchUser();
  },[])

  async function fetchUser() {
    if (localStorage.getItem('access_token')){
      const response = await api.get('users', { custom: (user) => user.access_token === localStorage.getItem('access_token') });
      setUser(response[0]);
    }
  }
  // validate

  const schema = z.object({
    email: z.string({
      required_error: "Email là bắt buộc",
      invalid_type_error: "Email phải là chuỗi"
    }).email({message: "Email không đúng định dạng"}),
    password: z.string({
      required_error: "Mật khẩu là bắt buộc",
      invalid_type_error: "Mật khẩu phải là chuỗi"
    }).min(3,{message: "Mật khẩu phải có số ký tự tối thiểu là 3"})
  })
  
  const {register, handleSubmit, setError, formState: {errors, isSubmitting}}
  = useForm({
    defaultValues: {
      email: "t1@gmail.com",
      password: 'pas'
    },
    resolver: zodResolver(schema)
  })
  const handleLoginSubmit = async (data) => {
    const users = await api.get('users', {
      custom: (user)=>user.email === data.email && user.password === data.password
    })
    if (!users.length){
      setError("root", {message: "Email hoặc mật khẩu không đúng"});
      return;
    }
    localStorage.setItem('access_token', users[0].access_token);
    setUser(users[0]);
    setIsShowModal(false);
  }

  function handleLogout(){
    if (localStorage.getItem('access_token')){
      localStorage.removeItem('access_token');
      setUser(null);
    }
  }
  const profileOptions = [
    {
      label: 'Thông tin',
      value: 'info'
    },
    {
      label: 'Cài đặt',
      value: 'setting'
    },
    {
      label: 'Đăng xuất',
      value: 'logout',
      onClick: handleLogout
    }
  ]
  
  const languageList = [
    {
      label: 'English',
      value: 'en',
      display: <img
        className="dropdown-toggle"
        src="/assets/image/header/img_united_kingdom.png"
        alt=""
      />
    },
    {
      label: 'Vietnamese',
      value: "vi"
    }
  ]

  const [language, setLanguage] = useState(languageList[0]);

  return (
    <nav className="sticky p-0">
      {!user && isShowModal && <Modal
        onClose={() => { setIsShowModal(false) }}
        headerClass='px-5 py-2 border-b-[1px] border-[#ccc]'
        title={<h2 className="gradient-text heading-2">Đăng nhập</h2>}
        body={
          <form onSubmit={handleSubmit(handleLoginSubmit)} className="flex flex-col justify-between" noValidate>
            <div className="flex flex-col px-5 pt-4">
              {errors.root && <span className = "text-red-600">{errors.root.message}</span>}
              <label htmlFor="email">Nhập Email: </label>
              {errors.email && <span className = "text-red-600">{errors.email.message}</span>}
              <input 
                {...register('email')}
                className={`mt-2 mb-5 px-3 py-2 rounded-md bg-white w-full 'border-[#ccc] border-[1px] body-1`} 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Email của bạn" />
              <label htmlFor="password">Nhập mật khẩu: </label>
              {errors.password && <span className = "text-red-600">{errors.password.message}</span>}
              <input 
                {...register('password')}
                className={`mt-2 px-3 py-2 rounded-md bg-white w-full border-[#ccc] border-[1px] body-1`} 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Mật khẩu của bạn" />
            </div>
            <div className="flex justify-end border-t-[1px] border-[#ccc] mt-9 py-3 px-5">
              <Button disabled = {isSubmitting} isLoading={isSubmitting} variant="contained" size="lg" className="button-label py-[8px]" color="primary">Đăng nhập</Button>
            </div>
          </form>
        }
      />}
      <div className="bg-dark w-full">
        <div className="hidden xl:flex container justify-between px-4 py-2">
          <div className="flex items-center justify-center">
            <a
              href=""
              className="btn button-label hover:text-primary bg-transparent text-white no-underline px-4 py-2"
            >
              Việc làm IT
            </a>
            <a
              href=""
              className="btn button-label hover:text-primary bg-transparent text-white no-underline px-4 py-2"
            >
              Tạo CV
            </a>
            <a
              href=""
              className="btn button-label hover:text-primary bg-transparent text-white no-underline px-4 py-2"
            >
              Công ty IT
            </a>
            <a
              href=""
              className="btn button-label hover:text-primary bg-transparent text-white no-underline px-4 py-2"
            >
              Trắc nghiệm tính cách
            </a>
            <a
              href=""
              className="btn button-label hover:text-primary bg-transparent text-white no-underline px-4 py-2"
            >
              Blog
            </a>
            <a
              href=""
              className="btn button-label hover:text-primary bg-transparent text-white no-underline px-4 py-2"
            >
              Việc làm IT
              <span className="gradient-text">Fresher</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 gap-xxl-8">
            <a
              href=""
              className="body-2 no-underline text-white flex items-center"
            >
              <img
                src="/assets/image/header/icon/img_icon_phone.png"
                className="me-2"
                alt=""
              />
              028.6273.3496
            </a>
            <a
              href=""
              className="body-2 no-underline text-white flex items-center"
            >
              <img
                src="/assets/image/header/icon/img_icon_person.png"
                className="me-2"
                alt=""
              />
              Đăng Tuyển
            </a>
            <a
              href=""
              className="body-2 no-underline text-white flex items-center"
            >
              <img
                src="/assets/image/header/icon/img_icon_mail.png"
                className="me-2"
                alt=""
              />
              Liên Hệ
            </a>
            <Dropdown
              listClass="top-[120%] bg-transparent shadow-md rounded-[2px] overflow-hidden hover:bg-transparent !px-0"
              itemClass="min-w-auto bg-white"
              className="bg-transparent"
              toggleClass="bg-transparent hover:bg-transparent"
              options={languageList}
              rightIcon=''
              value={language}
              onChange={setLanguage}
            >

            </Dropdown>
          </div>
        </div>
      </div>
      <div className="bg-transparent md:bg-white w-full">
        <div className="container py-4 flex items-center justify-between px-4">
          <div className="navbar-brand p-0 hidden md:block">
            <a href="./index.html">
              <img
                className="max-w-[210px] max-h-[40px]"
                src="/assets/image/header/img_logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex items-center justify-between w-full md:w-auto md:gap-[32px] md:flex-row-reverse">
            <div className="nav-item">
              {user ? <Dropdown leftIcon={<img
                width={40}
                height={40}
                src={user.avatar}
                alt=""
                className="rounded-full"
              />}
                toggleClass = "!rounded-[16px] py-[10px] !px-0 md:!px-[18px] gap-[10px] !bg-transparent md:!bg-dark"
                fixedDisplay
                options = {profileOptions}
                variant = "dark"
                listClass = "rounded-[4px] !bg-white md:!bg-dark shadow-sm overflow-hidden top-[101%]"
                itemClass = "px-[12px] last:border-t-[1px] hover:!bg-neutral-gray-1 md:hover:!bg-white md:hover:!text-black !bg-transparent md:!text-white !text-black last:border-white"
                display = {<div className="flex flex-col text-start">
                  <span className="font-[700] text-[12px] leading-[20px] text-primary md:text-neutral-gray-3">{user.name}</span>
                  <span className="button-label text-black md:text-white">UI UX</span>
                </div>
                }
              /> : <button onClick={() => { setIsShowModal(true) }} className="text-primary body-1 bg-transparent border-0 cursor-pointer js-login-modal-trigger">
                Đăng nhập
              </button>}

            </div>
            <div className="nav-item">
              <button className="relative bg-transparent border-0">
                <img
                  src="/assets/image/header/icon/img_icon_bell.png"
                  width={25}
                  height={28}
                  alt=""
                />
                <span className="rounded-[100px] text-white bg-primary absolute top-[-5px] right-[-10px] p-[2px_4px] extra-small">99+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
