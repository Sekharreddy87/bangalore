import SignUp from "./SignUp";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import ChangePassword from "./ChangePassword";

const settings = {
  activeLayout: "layout1",
  layout1Settings: {
    topbar: {
      show: false
    },
    leftSidebar: {
      show: false,
      mode: "close"
    }
  },
  layout2Settings: {
    mode: "full",
    topbar: {
      show: false
    },
    navbar: { show: false }
  },
  secondarySidebar: { show: false },
  footer: { show: false }
};

const sessionRoutes = [
  {
    path: "/session/signup",
    component: SignUp,
    settings
  },
  {
    path: "/session/signin",
    component: SignIn,
    settings
  },
  {
    path: "/session/change-password",
    component: ChangePassword,
    settings
  },
  {
    path: "/session/404",
    component: NotFound,
    settings
  }
];

export default sessionRoutes;
