import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import reactDOM from "react-dom";

export default function Toast(props) {
  const {
    message = "This is a toast message",
    type = "info",
    position = "top-right",
    duration = 3000,
    onClose,
    className = "",
  } = props;

  const baseClass = "fixed z-50 rounded-md shadow-md p-4 flex items-center justify-between max-w-sm";

  const typeClass = {
    success: "bg-success-3 text-success-1 border-l-4 border-success-1",
    error: "bg-error-3 text-error-1 border-l-4 border-error-1",
    info: "bg-infor-3 text-infor-1 border-l-4 border-infor-1",
    warning: "bg-primary-LC4 text-primary-DC2 border-l-4 border-primary"
  };

  const positionClass = {
    "top-right": "top-5 right-5 animate-slide-in-right",
    "top-left": "top-5 left-5",
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "top-center": "top-5 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-5 left-1/2 transform -translate-x-1/2"
  };

  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration, onClose]);

  return reactDOM.createPortal (
    <div className={`${baseClass} ${typeClass[type]} ${positionClass[position]} ${className}`}>
      <div className="body-2 mr-4">{message}</div>
      {onClose && (
        <button 
          onClick={onClose}
          className="rounded-full hover:bg-black/10 p-1"
        >
          <AiOutlineClose className="text-neutral-gray-6" />
        </button>
      )}
    </div>,
    document.body
  );
}