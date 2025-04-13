import {Loading} from "../Loading";
export default function Button(props) {
  const baseClass = 'cursor-pointer transition-all relative';

  const {
    children,
    variant = 'text',
    color = 'base',
    size = 'md',
    className,
    isLoading = false,
    ...events
  } = props;

  const variantClass = {
    text: {
      primary: 'text-primary hover:bg-primary/10',
      base: 'text-neutral-gray-7 hover:bg-neutral-gray-7/10',
      success: 'text-success-1 hover:bg-success-1/10',
      dark: 'text-dark hover:bg-dark/10'
    },
    contained: {
      primary: 'text-white hover:bg-primary/90 bg-primary',
      base: 'text-black hover:bg-neutral-gray-2 bg-neutral-gray-1',
      success: 'text-white hover:bg-success-1/90 bg-success-1',
      dark: 'text-white hover:bg-dark/90 bg-dark'
    },
    outlined: {
      primary: 'text-primary hover:ring-primary/100 ring-[1px] ring-primary/40',
      base: 'text-neutral-gray-7 hover:ring-neutral-gray-7/100 ring-[1px] ring-neutral-gray-7/40',
      success: 'text-success-1 hover:ring-success-1/100 ring-[1px] ring-success-1/40',
      dark: 'text-dark hover:ring-dark/100 ring-[1px] ring-dark/40'
    }
  }

  const sizeClass = {
    sm: 'text-sm py-[1px] px-[6px] rounded-sm',
    md: 'text-base py-[2px] px-[8px] rounded-md',
    lg: 'text-lg py-[4px] px-[12px] rounded-lg'
  }
  
  const variantStyles = variantClass[variant] || {};
  const colorStyles = variantStyles[color] || '';

  return (
    <button className={`${baseClass} ${colorStyles} ${sizeClass[size]} ${className}`} {...events}>
      <span className={`${isLoading && 'invisible'}`}>{children}</span>
      {isLoading && <Loading />}
    </button>
  );
}
