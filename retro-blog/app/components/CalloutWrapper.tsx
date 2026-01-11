import React from "react";
interface Props {
  children: React.ReactNode;
  isLink?: boolean;
  className?: string;
}
const CalloutWrapper = ({ children, className, isLink = false }: Props) => {
  return (
    <div
      className={`${className} group rounded-lg border border-teal-400/15 bg-gray-900/60 p-4 backdrop-blur-sm transition-all ${
        isLink && "hover:border-teal-400/30"
      }`}
    >
      {children}
    </div>
  );
};

export default CalloutWrapper;
