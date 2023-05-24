import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import Widget from "components/widget/Widget";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import GoogleMaps from "./components/GoogleMaps";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 flex h-fit w-full flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-12">
          <BannerImage />
        </div>
        {/* <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div> */}
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-4">
          <General />
        </div>

        <div className="col-span-5 flex flex-col gap-3 p-3 lg:col-span-12 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          {/* <Project /> */}
          <h4 className="m-auto ml-1 text-3xl font-bold text-navy-700 dark:text-white">
            Data Desa
          </h4>
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Luas Desa"}
            subtitle={"69.000 m"}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={"Jumlah Penduduk"}
            subtitle={"581"}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Total Dusun"}
            subtitle={"2"}
          />
        </div>

        <div className="col-span-5 flex flex-col gap-3 lg:col-span-12 lg:mb-0 lg:flex-row lg:gap-10 3xl:col-span-5">
          <GoogleMaps />
        </div>

        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
