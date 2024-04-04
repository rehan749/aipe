import FeaturedNews from "@/components/FeaturedNews/FeaturedNews";
import MainNewsSlider from "@/components/MainNews/MainNewsSlider";
import News from "@/components/News";
import NewsApp from "@/components/NewsApp";
import TopNewsSlider from "@/components/TopNewsSlider/TopNewsSlider";

import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/Topbar";


export default function Home() {
  return (
    <>
    {/* <News /> */}
    {/* <NewsApp /> */}
    <Topbar />
    <Navbar />
    <TopNewsSlider/>
     <MainNewsSlider />
     <FeaturedNews />
    

    
    </>
  )
}
