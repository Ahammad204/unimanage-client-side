import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Features from '../Features/Features';
import Pricing from '../price/price';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <Pricing></Pricing>
        </>
    );
};

export default Home;