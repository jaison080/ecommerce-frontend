import React, { useState } from "react";
import {
  Announcement,
  BottomHero,
  HandPickedCollections,
  Hero,
  Loader,
  NewArrivals,
  ShopByBrands,
  MainLayout,
} from "../components";
import { CustomTitle } from "../utils";

function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  if (loading) {
    return (
      <>
        <CustomTitle title={"Home"} />
        <Loader />
      </>
    );
  }
  return (
    <>
      <MainLayout>
        <Announcement />
        <Hero />
        <NewArrivals />
        <HandPickedCollections />
        <ShopByBrands />
        <BottomHero />
      </MainLayout>
    </>
  );
}

export default Home;
