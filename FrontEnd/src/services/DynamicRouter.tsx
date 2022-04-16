import { Dashboard } from "@mui/icons-material";
import SignIn from "layouts/authentication/sign-in";
import Billing from "layouts/billing";
import Tables from "layouts/tables";
import HomePage from "layouts/welcome";
import { BsCreditCardFill, BsFillPersonFill, BsFillArrowUpLeftSquareFill, BsFillFilePostFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { IoHome, IoRocketSharp, IoStatsChart } from "react-icons/io5";
import account from "./account";


import Profile from "layouts/profile";

import SignUp from "layouts/authentication/sign-up";
import { MdOutlineWork } from "react-icons/md";
import partners from "layouts/partners";

// Vision UI Dashboard React icons


class DynamicRouters {
  static route: any;
  constructor() {
    var isloggedin =true //account.status;
    
    if (isloggedin) {
        console.log("logged in routes in place");
        DynamicRouters.route = [
          {
            type: "collapse",
            name: "Dashboard",
            key: "dashboard",
            route: "/dashboard",
            icon: <IoHome size="15px" color="inherit" />,
            component: Dashboard,
            noCollapse: true,
          },
          {
            type: "collapse",
            name: "Home",
            key: "HomePage",
            route: "/HomePage",
            icon: <IoHome size="15px" color="inherit" />,
            component: HomePage,
            noCollapse: true,
          },
          {
            type: "collapse",
            name: "Tables",
            key: "tables",
            route: "/tables",
            icon: <IoStatsChart size="15px" color="inherit" />,
            component: Tables,
            noCollapse: true,
          },
          {
            type: "collapse",
            name: "Billing",
            key: "billing",
            route: "/billing",
            icon: <BsCreditCardFill size="15px" color="inherit" />,
            component: Billing,
            noCollapse: true,
          },
          { type: "title", title: "Account Pages", key: "account-pages" },
          {
            type: "collapse",
            name: "Profile",
            key: "profile",
            route: "/profile",
            icon: <BsFillPersonFill size="15px" color="inherit" />,
            component: Profile,
            noCollapse: true,
          },
          //add deconnection button
          //tenseeeech
          {
            type: "buttonDiconnect",
            name: "disconnect",
            key: "disconnect",
            route: "/HomePage",
      
            icon: <BsFillArrowUpLeftSquareFill size="15px" color="inherit" />,
            component: HomePage,
            noCollapse: true,
          },
        ];
      }
      else{
      //not loggedin
      console.log("not logged in");
      DynamicRouters.route = [
        {
          type: "collapse",
          name: "Home",
          key: "HomePage",
          route: "/HomePage",
          icon: <IoHome size="15px" color="inherit" />,
          component: HomePage,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Tables",
          key: "tables",
          route: "/tables",
          icon: <IoStatsChart size="15px" color="inherit" />,
          component: Tables,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Sign In",
          key: "sign-in",
          route: "/authentication/sign-in",
          icon: <IoIosDocument size="15px" color="inherit" />,
          component: SignIn,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Sign Up",
          key: "sign-up",
          route: "/authentication/sign-up",
          icon: <IoRocketSharp size="15px" color="inherit" />,
          component: SignUp,
          noCollapse: true,
        },
      ];
      }
  }
   static getRoutes(){
    var isloggedin = account.status;
    
    if (isloggedin) {
        console.log("logged in routes in place");
        DynamicRouters.route = [
          {
            type: "collapse",
            name: "Dashboard",
            key: "dashboard",
            route: "/dashboard",
            icon: <IoHome size="15px" color="inherit" />,
            component: Dashboard,
            noCollapse: true,
          },
          {
            type: "collapse",
            name: "Home",
            key: "HomePage",
            route: "/HomePage",
            icon: <IoHome size="15px" color="inherit" />,
            component: HomePage,
            noCollapse: true,
          },
          {
            type: "collapse",
            name: "Tables",
            key: "tables",
            route: "/tables",
            icon: <IoStatsChart size="15px" color="inherit" />,
            component: Tables,
            noCollapse: true,
          },
          {
            type: "collapse",
            name: "Billing",
            key: "billing",
            route: "/billing",
            icon: <BsCreditCardFill size="15px" color="inherit" />,
            component: Billing,
            noCollapse: true,
          },
          { type: "title", title: "Account Pages", key: "account-pages" },
          {
            type: "collapse",
            name: "Profile",
            key: "profile",
            route: "/profile",
            icon: <BsFillPersonFill size="15px" color="inherit" />,
            component: Profile,
            noCollapse: true,
          },
          //add deconnection button
          //tenseeeech
          {
            type: "buttonDiconnect",
            name: "disconnect",
            key: "disconnect",
            route: "/HomePage",
      
            icon: <BsFillArrowUpLeftSquareFill size="15px" color="inherit" />,
            component: HomePage,
            noCollapse: true,
          },
        ];
      }
      else{
      //not loggedin
      console.log("not logged in");
      DynamicRouters.route = [
        {
          type: "collapse",
          name: "Home",
          key: "HomePage",
          route: "/HomePage",
          icon: <IoHome size="15px" color="inherit" />,
          component: HomePage,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Programs",
          key: "Programs",
          route: "/Programs",
          icon: <BsFillFilePostFill size="15px" color="inherit" />,
          component: HomePage,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Partners",
          key: "partners",
          route: "/Partners",
          icon: <MdOutlineWork size="15px" color="inherit" />,
          component: partners,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Tables",
          key: "tables",
          route: "/tables",
          icon: <IoStatsChart size="15px" color="inherit" />,
          component: Tables,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Sign In",
          key: "sign-in",
          route: "/authentication/sign-in",
          icon: <IoIosDocument size="15px" color="inherit" />,
          component: SignIn,
          noCollapse: true,
        },
        {
          type: "collapse",
          name: "Sign Up",
          key: "sign-up",
          route: "/authentication/sign-up",
          icon: <IoRocketSharp size="15px" color="inherit" />,
          component: SignUp,
          noCollapse: true,
        },
      ];
      }
      return (DynamicRouters.route);
  }
  
}
export default DynamicRouters;
