import React from "react";
import { authRoles } from "../../auth/authRoles";

const myDashRoutes = [
  {
    path: "/dashboard/course",
    component: React.lazy(() => import("./MyDash")),
    auth: authRoles.admin
  }
];

export default myDashRoutes;
