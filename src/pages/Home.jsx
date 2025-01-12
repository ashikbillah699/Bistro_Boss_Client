import { Helmet } from "react-helmet";
import Banner from "../assets/Banner";
import CallUs from "../components/CallUs";
import ChefRecommends from "../components/ChefRecommends";
import OrderOnline from "../components/OrderOnline";
import ParallaxMenu from "../components/ParallaxMenu";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";
import BistroBoss from "./BistroBoss";





const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <ParallaxMenu></ParallaxMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;