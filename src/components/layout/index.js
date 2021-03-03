import React from 'react'

import { title } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={title}>This is a page title</h1>
      {children}
    </div>
  );
};


export default Layout
