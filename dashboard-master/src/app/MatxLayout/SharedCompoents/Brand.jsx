import React from "react";

const Brand = ({ children }) => {
  return (
    <div className="flex items-center justify-between brand-area">
      <div className="flex items-center brand">
        <img src="/assets/images/logo-s.png" alt="company-logo"  style={{height:'47px',width:'187px'}} />
        {/*<span className="brand__text">Si</span>*/}
      </div>
      {children}
    </div>
  );
};

export default Brand;
