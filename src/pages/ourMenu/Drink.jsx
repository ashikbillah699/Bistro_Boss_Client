/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItems from "../../sheard/MenuItems";
import BgCover from "../../sheard/BgCover";
import DrinkImg from '../../assets/menu/banner3.jpg'


const Drink = ({drinks}) => {
    const drinkData = drinks.filter(item => item.category === 'drinks')
    return (
        <div className="mt-10">
            <BgCover
                img={DrinkImg}
                title={'DRINKS'}
                description={'Dramatically myocardinate equity invested best practices with diverse results.'}
                bgHyt={'min-h-[520px]'}
                min={'min-h-[220px] max-w-screen-md'}
            ></BgCover>
            <div className="max-w-screen-lg mx-auto pb-10">
                <div className="grid md:grid-cols-2 gap-10 my-8">
                    {
                        drinkData.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center">
                    {
                        drinkData.length > 0 && (
                            <Link to={`/ourShop/${drinkData[0].category}`}> 
                                <button className='border-b-2 rounded-lg pb-2 px-4 border-black font-bold'>
                                    ORDER YOUR FAVOURITE FOOD
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
        )
};

export default Drink;