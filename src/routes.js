import { DefaultLayout } from "./layouts";
import Login from "./Views/Login";
import LoginLayout from "./layouts/Login";

export default [
  {
    path: "/",
    exact: true,
    // layout: LoginLayout,
    component:  Login
  },
];
