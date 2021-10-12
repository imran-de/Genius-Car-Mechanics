import React from 'react';
import Banner from '../../../components/Home/Banner/Banner';
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Contact></Contact>
        </div>
    );
};

export default Home;