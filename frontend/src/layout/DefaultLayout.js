import React from "react";
import { AppContent, AppHeader, AppSidebar } from "../components";

const DefaultLayout = () => {
  return (
    <div>
      <AppHeader />
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <AppSidebar />

        {/* <!-- /.content-wrapper --> */}
        <AppContent />
      </div>
    </div>
  );
};

export default DefaultLayout;
