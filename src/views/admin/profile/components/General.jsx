import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="mb-5 px-2 text-3xl font-bold text-navy-700 dark:text-white">
          Profil Singkat Desa
        </h4>
        <p className="mt-2 px-2 text-justify text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
          autem repellendus quo, suscipit ullam ipsam excepturi voluptate in
          illo facilis quis sequi error placeat nulla earum voluptas recusandae
          necessitatibus quisquam repudiandae temporibus. Quam ad excepturi
          atque doloribus. Tenetur eos voluptatem voluptas a officia saepe
          itaque ea consequatur reprehenderit placeat.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <h4 className="mb-5 px-2 text-3xl font-bold text-navy-700 dark:text-white">
            Visi
          </h4>
          <p>Jalan</p>
          <p>Jalan</p>
          <p>Jalan</p>
          <p>Jalan</p>
          {/* <p className="text-sm text-gray-600">Education</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Stanford University
          </p> */}
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <h4 className="mb-5 px-2 text-3xl font-bold text-navy-700 dark:text-white">
            Misi
          </h4>
          <p>Jalan</p>
          <p>Jalan</p>
          <p>Jalan</p>
          <p>Jalan</p>
          {/* <p className="text-sm text-gray-600">Languages</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            English, Spanish, Italian
          </p> */}
        </div>

        {/* <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Department</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Product Design
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Work History</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            English, Spanish, Italian
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Organization</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Simmmple Web LLC
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Birthday</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            20 July 1986
          </p>
        </div> */}
      </div>
    </Card>
  );
};

export default General;
