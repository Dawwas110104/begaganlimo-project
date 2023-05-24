const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} <a rel="noopener" target="_blank" href="https://bit.ly/dawwas-portfolio">Dawwas.</a> All Rights Reserved.
        </p>
      </h5>
    </div>
  );
};

export default Footer;
