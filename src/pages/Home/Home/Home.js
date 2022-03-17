import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';
import Services from '../Services/Services';

const Home = () => {
    function doSomething(first, second){
        console.log(second);
    }
    
    doSomething(23);
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <BannerItems></BannerItems>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;