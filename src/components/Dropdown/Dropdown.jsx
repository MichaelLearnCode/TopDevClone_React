import { FaChevronDown } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

export default function Dropdown(props) {
    const [isShow, setIsShow] = useState(false);
    const dropdownE = useRef();
    useEffect(() => {
        const Handler = (e) => {
            if (!dropdownE.current) return;
            if (!dropdownE.current.contains(e.target)) {
                setIsShow(false);
            }
        }
        
        document.addEventListener('click', Handler, true);
        return ()=>{document.removeEventListener('click', Handler)};
    }, []);

    const handleOptionClick = (option)=>{
        if (option.onClick)option.onClick();
        setIsShow(false);
        if (onChange)onChange(option);
    }

    const {
        initialLabel = "Select...",
        value = '',
        className = "",
        leftIcon,
        toggleClass = "",
        rightIcon = <FaChevronDown />,
        variant = "base",
        size = "md",
        options = [],
        listClass = "",
        itemClass = "",
        onChange,
        fixedDisplay = false,
        display 
    } = props;

    const initialClass = "rounded-sm cursor-pointer flex items-center gap-[6px] justify-between"
    const itemInitialClass = "cursor-pointer min-w-[10rem]"

    const variantClass = {
        base: "bg-neutral-gray-1 text-black hover:bg-neutral-gray-2",
        dark: "bg-dark hover:bg-white/80 hover:text-black text-white"
    }

    const toggleVariantClass = {
        base: "bg-neutral-gray-1 text-black",
        dark: "bg-dark text-white"
    }
    const sizeClass = {
        sm: "px-[6px] py-[2px]",
        md: "px-[10px] py-[4px]",
        lg: "px-[14px] py-[6px]",
        xl: "px-[18px] py-[8px]"
    }



    const itemList = options.map(option => {
        return <li key={option.value} onClick={()=>{handleOptionClick(option)}} className={`${variantClass[variant]} ${itemInitialClass} ${itemClass}`}>{option.label}</li>
    })

    return (
        <div ref={dropdownE} className={`${className} relative`}>
            <div onClick={() => setIsShow(!isShow)} className={`${sizeClass[size]} ${initialClass} ${toggleVariantClass[variant]} ${toggleClass}`}>
                {leftIcon && <div>{leftIcon}</div>}
                {fixedDisplay? display : value? (value.display??value.label):initialLabel}
                {rightIcon && <div>{rightIcon}</div>}
            </div>
            {isShow &&
                <ul className={`top-[100%] left-0 absolute ${variantClass[variant]} ${listClass}`}>
                    {itemList}
                </ul>
            }
        </div>
    )
}
