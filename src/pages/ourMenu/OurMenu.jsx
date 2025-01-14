import { Helmet } from "react-helmet";
import MenuBanner1 from '../../assets/menu/banner3.jpg'
import BgCover from "../../sheard/BgCover";
import TodayOffer from "./TodayOffer";
import useMenu from "../../hooks/useMenu";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salads from "./Salads";
import Soups from "./Soups";
import Drink from "./Drink";


const OurMenu = () => {
    const [menu] = useMenu()

    return (
        <div>
            <div>
                <Helmet>
                    <title>Bistro  |  Our Menu</title>
                </Helmet>
                <BgCover
                    img={MenuBanner1}
                    title={'Our Menu'}
                    description={'procedures for reliable resources.'}
                    bgHyt={'min-h-[650px]'}
                    min={'h-[250px] w-full'}
                ></BgCover>
            </div>
            <div>
                <TodayOffer offered={menu}></TodayOffer>
            </div>
            <div>
                <Dessert desserts={menu}></Dessert>
            </div>
            <div>
                <Pizza pizzas={menu}></Pizza>
            </div>
            <div>
                <Salads salad={menu}></Salads>
            </div>
            <div>
                <Soups soup={menu}></Soups>
            </div>
            <div>
                <Drink drinks ={menu}></Drink>
            </div>
        </div>
    );
};

export default OurMenu;