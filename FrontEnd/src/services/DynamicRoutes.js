


function customRoutes() {
    //var c1=new account("aziz","test","test");
    var isloggedin = account.status;
    //console.log("custom routes in place");
    if (isloggedin) {
      console.log("logged in routes in place");
      return [
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
    //not loggedin
    console.log("not logged in");
    return [
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

  //routes=customRoutes();

  function RefreshRoutes()
  {
    routes=customRoutes();
  }
export default RefreshRoutes;
