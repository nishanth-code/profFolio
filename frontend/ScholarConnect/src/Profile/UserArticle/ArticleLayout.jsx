import { Outlet } from "react-router-dom";
import React from "react";
const ArticleLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default ArticleLayout;
