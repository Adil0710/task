import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-[#1781F8] text-white font-semibold px-5 rounded-lg text-[12px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
