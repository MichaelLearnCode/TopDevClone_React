import {Dropdown} from "../../components/Dropdown";
export default function HeaderSection() {


  const languageList = [
    {
      id:1,
      value: 'English'
    },
    {
      id:2,
      value: 'Vietnamese'
    }
  ]
  
  return (
    <nav className="navbar p-0">
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
              listClass = "bg-transparent hover:bg-transparent"
              className ="bg-transparent"
              data = {languageList}
              rightIcon = ''
            >
            <img
                className="dropdown-toggle"
                src="/assets/image/header/img_united_kingdom.png"
                alt=""
              />
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
            <div className="nav-item profile-holder">
              <button className="text-primary body-1 bg-transparent border-0 cursor-pointer js-login-modal-trigger">
                Đăng nhập
              </button>
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
