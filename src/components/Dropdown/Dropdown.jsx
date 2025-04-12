import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

export default function Dropdown(props) {
    const [isShow, setIsShow] = useState(false);

    const {
        children,
        className = "",
        leftIcon,
        rightIcon = <FaChevronDown />,
        variant = "base",
        size = "md",
        data = [],
        listClass = "",
        itemClass = "",
    } = props;

    const initialClass = "rounded-sm cursor-pointer flex items-center gap-[6px] justify-between"
    const itemInitialClass = "cursor-pointer min-w-[12rem]"

    const variantClass = {
        base: "bg-neutral-gray-1 text-black hover:bg-neutral-gray-2",
        dark: "bg-dark hover:bg-dark/90 text-white"
    }
    const sizeClass = {
        sm: "px-[6px] py-[2px]",
        md: "px-[10px] py-[4px]",
        lg: "px-[14px] py-[6px]",
        xl: "px-[18px] py-[8px]"
    }



    const itemList = data.map(item=>{
        const handleItemClick = ()=>{
            setIsShow(!isShow);
            item.onClick? item.onClick():'';
        }
        return <li key = {item.id} onClick={handleItemClick} className = {`${variantClass[variant]} ${itemInitialClass} ${itemClass}`}>{item.value}</li>
    })
    
    return (
        <div className={`${className} relative`}>
            <div onClick = {()=>setIsShow(!isShow)} className={`${sizeClass[size]} ${initialClass} ${variantClass[variant]} ${listClass}`}>
                {leftIcon && <div>{leftIcon}</div>}
                {children}
                {rightIcon && <div>{rightIcon}</div>}
            </div>
            {isShow && 
            <ul className={`top-[100%] left-0 absolute ${listClass}`}>
                {itemList}
            </ul>
            }
        </div>
    )
}
