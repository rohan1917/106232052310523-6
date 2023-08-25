import React, { useState } from "react";

// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

// Components
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import EnterainmentCardSlider from "../components/Entertainment/EnterainmentCard.Component";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

        return(
           <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 ">The Best of Entertainment</h1>
                <EnterainmentCardSlider />
            </div>
            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider 
                title="Recommended Movies"
                subject="List of recommended movies"
                posters={recommendedMovies}
                isDark={false}
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay" className="w-full h-full" />
                </div>
                <PosterSlider 
                title="Premiers"
                subject="Brand new release every Friday"
                posters={premierMovies}
                isDark={true}
                />
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                 <PosterSlider 
                title="Online Streaming Events"
                subject="Online Streaming Events"
                posters={onlineStreamEvents}
                isDark={false}
                />
            </div>
           </>
        )
};


export default DefaultLayoutHoc(HomePage);