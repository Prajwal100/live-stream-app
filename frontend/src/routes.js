import React from "react";

const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("./pages/Page404"));

const VideoUpload = React.lazy(() => import("./pages/upload/Upload"));
const VideoUploadDetails = React.lazy(() =>
  import("./pages/upload/UploadDetail")
);

const Channels = React.lazy(() => import("./pages/channels"));
const SingleChannel = React.lazy(() =>
  import("./pages/channels/singleChannel")
);

const History = React.lazy(() => import("./pages/history"));

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
  },
  {
    path: "/upload",
    name: "VideoUpload",
    element: VideoUpload,
  },

  {
    path: "/upload/details",
    name: "VideoUploadDetails",
    element: VideoUploadDetails,
  },

  {
    path: "/channels",
    name: "Channels",
    element: Channels,
  },

  {
    path: "/single-channel",
    name: "SingleChannel",
    element: SingleChannel,
  },

  {
    path: "/history",
    name: "History",
    element: History,
  },

  {
    path: "/404",
    name: "404",
    element: Page404,
  },
];

export default routes;
