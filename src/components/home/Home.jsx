import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import BreadCrumbs from "../bread-crumbs/BreadCrumbs";
import TopPicks from "../top-picks/TopPicks";
import Generes from "../generes/Generes";
import Recent from "../recent/Recent";
import Artists from "../artists/Artists";
import Footer from "../footer/Footer";
import HeaderMobile from "../header-mobile/HeaderMobile";
import MobileFooter from "../mobile-footer/MobileFooter";

const Home = () => {
  return (
    <div className="overflow-x-hidden w-[100%]">
      <div className="flex">
        <div className="flex-1 border-r  border-r-custom-grey min-h-screen w-full hidden md:inline-block">
          <Sidebar />
        </div>
        <div className="md:flex-[5] w-full">
          <div className="md:inline hidden">
            <Header />
          </div>
          <div className="md:hidden inline-block w-full">
            <HeaderMobile />
          </div>
          <div>
            <BreadCrumbs />
          </div>
          <div>
            <TopPicks title="Top Picks" />
            <TopPicks title="Fresh Release" />
          </div>
          <div className="p-6">
            <Generes />
          </div>
          <div>
            <Recent />
          </div>
          <div>
            <Artists />
          </div>
          <div className="md:block hidden">
            <Footer />
          </div>
          <div className="md:hidden">
            <MobileFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
