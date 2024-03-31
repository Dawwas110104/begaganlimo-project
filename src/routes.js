import React from "react";

// Admin Imports
// import MainDashboard from "views/admin/default";
import Marketplace from "views/user/marketplace";
import Profile from "views/user/profile";

// import DataTables from "views/admin/tables";
import History from "views/user/history";
import Wisata from "views/user/wisata";
import ProfileWisata from "views/user/profilewisata";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  // MdHome,
  MdOutlineShoppingCart,
  MdPerson,
  MdLandscape,
  MdMap,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Profil Desa",
    layout: "/user",
    path: "default",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    secondary: true,
  },
  // {
  //   name: "UMKM Desa",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <MainDashboard />,
  // },
  {
    name: "UMKM Desa",
    layout: "/user",
    path: "umkm",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Marketplace />,
  },
  {
    name: "Wisata Desa",
    layout: "/user",
    icon: <MdLandscape className="h-6 w-6" />,
    path: "wisata",
    component: <Wisata />,
  },
  {
    name: "Sejarah Desa",
    layout: "/user",
    path: "history",
    icon: <MdMap className="h-6 w-6" />,
    component: <History />,
  },
  {
    layout: "/user",
    path: "Profile-Wisata/:wisata",
    component: <ProfileWisata />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    hidden: true,
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
