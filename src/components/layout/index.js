import React from 'react'

import { title } from "./layout.module.css";
import Header from "../header"

const Layout = ({ children }) => {
  return (
    <div>
      <p><Header /></p>
      <h1 className={title}>This is a page title from the layout component</h1>
      {children}
    </div>
  );
};


export default Layout
