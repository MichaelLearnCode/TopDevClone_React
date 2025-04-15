import reactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";



export default function Modal(props) {
    const {
        onClose,
        className = "",
        title = "Title",
        headerClass = "",        
        body,
        bodyClass,
        footer,
        footerClass

    } = props;
    const modalRef = useRef();
    const initialClass = "rounded-md overflow-hidden bg-white flex flex-col justify-between shadow-sm w-full max-w-[500px]"
    const initialHeaderClass = "flex items-center";
    const initialBodyClass = "flex-1"
    const initialFooterClass = ""
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        const Handler = (e)=>{
            if (!modalRef.current)return;
            if(!modalRef.current.contains(e.target))onClose();
        }
        document.addEventListener('mousedown', Handler, true);
        return ()=>{document.body.classList.remove('overflow-hidden');
            document.removeEventListener('mousedown', Handler)
        }
    })
    return reactDOM.createPortal (
        <div className='w-full h-full bg-black/20 flex items-center justify-center fixed top-0'>
            <div ref = {modalRef} className={`${initialClass} ${className}`}>
                <div className={`${headerClass} ${initialHeaderClass}`}>
                    {title}
                    <AiOutlineClose onClick = {onClose} className='ms-auto cursor-pointer hover:text-neutral-gray-7'/>
                </div>
                <div className={`${initialBodyClass} ${bodyClass}`}>
                    {body}
                </div>
                <div className={`${footerClass} ${initialFooterClass}`}>
                    {footer}
                </div>
            </div>
        </div>,
        document.body
    )
}
