import React from "react";
import { authRoles } from "../../auth/authRoles";
import ChildDashboard1 from './ChildDashboard'
const dashboardRoutes = [
  {
    path: "/dashboard/course/:id",
    component: ChildDashboard1,
    // component: React.lazy(() => import("./ChildDashboard")),
    // auth: authRoles.admin
    
  },
  {
    path: "/dashboard/analytics",
    component: React.lazy(() => import("./Analytics")),
    // auth: authRoles.admin
  },

];

export default dashboardRoutes;
