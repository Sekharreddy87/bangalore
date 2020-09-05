import React from "react";

const questionRoutes = [
  {
    path: "/NewQuestion",
    component: React.lazy(() => import("./NewQuestion"))
  },
  {
    path: "/DetailQuestion/:id",
    component: React.lazy(() => import("./DetailQuestion"))
  }
];

export default questionRoutes;
