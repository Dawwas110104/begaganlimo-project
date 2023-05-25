import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import History from "views/admin/history";
import Wisata from "views/admin/wisata";
import ProfileWisata from "views/admin/profilewisata";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Beranda",
    layout: "/admin",
    path: "default",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "UMKM Desa",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Wisata Desa",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "wisata",
    component: <Wisata />,
  },
  {
    name: "Profil Desa",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sejarah Desa",
    layout: "/admin",
    path: "history",
    icon: <MdLock className="h-6 w-6" />,
    component: <History />,
  },
  {
    layout: "/admin",
    path: "Profile-Wisata/:wisata",
    hidden: true,
    component: <ProfileWisata />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
