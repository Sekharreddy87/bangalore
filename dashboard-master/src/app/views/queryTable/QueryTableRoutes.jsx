import React from "react";

const queryTableRoutes = [
  {
    path: "/QueryTable",
    component: React.lazy(() => import("./QueryTable"))
  }
];

export default queryTableRoutes;
