import React from "react";

// Admin Imports
// import MainDashboard from "views/admin/default";
import Marketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
import History from "views/admin/history";
import Wisata from "views/admin/wisata";
import ProfileWisata from "views/admin/profilewisata";
// import RTLDefault from "views/rtl/default";

// Auth Imports
// import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  // MdHome,
  MdOutlineShoppingCart,
  MdPerson,
  MdLandscape,
  MdMap,
} from "react-icons/md";

const routes = [
  {
    name: "Profil Desa",
    layout: "/admin",
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
    layout: "/admin",
    path: "umkm",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Marketplace />,
  },
  {
    name: "Wisata Desa",
    layout: "/admin",
    icon: <MdLandscape className="h-6 w-6" />,
    path: "wisata",
    component: <Wisata />,
  },
  {
    name: "Sejarah Desa",
    layout: "/admin",
    path: "history",
    icon: <MdMap className="h-6 w-6" />,
    component: <History />,
  },
  {
    layout: "/admin",
    path: "Profile-Wisata/:wisata",
    hidden: true,
    component: <ProfileWisata />,
  },
];
export default routes;
