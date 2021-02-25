import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="w-full">
    <Navbar />
    <main className="w-full">{children}</main>
    {/** TODO: Footer */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
