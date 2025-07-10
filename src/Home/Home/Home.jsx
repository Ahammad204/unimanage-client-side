import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Features from '../Features/Features';
import Pricing from '../price/price';
import JoinWaitlist from '../Waitlist/Waitlist';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <Pricing></Pricing>
            <JoinWaitlist></JoinWaitlist>
        </>
    );
};

export default Home;