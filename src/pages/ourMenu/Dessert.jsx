/* eslint-disable react/prop-types */
import BgCover from "../../sheard/BgCover";
import DessertImg from '../../assets/menu/dessert-bg.jpeg'
import MenuItems from "../../sheard/MenuItems";
import { Link } from "react-router-dom";

const Dessert = ({ desserts }) => {
    const dessertsData = desserts.filter(dessert => dessert.category === 'dessert')
    
    return (
        <div className="mt-10">
            <BgCover
                img={DessertImg}
                title={'Desserts'}
                description={'Dramatically myocardinate equity invested best practices with diverse results.'}
                bgHyt={'min-h-[520px]'}
                min={'min-h-[220px] max-w-screen-md'}
            ></BgCover>
            <div className="max-w-screen-lg mx-auto pb-10">
                <div className="grid md:grid-cols-2 gap-10 my-8">
                    {
                        dessertsData.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center">
                    {
                        dessertsData.length > 0 && (
                            <Link to={`/ourShop/${dessertsData[0].category}`}> 
                                <button className='border-b-2 rounded-lg pb-2 px-4 border-black font-bold'>
                                    ORDER YOUR FAVOURITE FOOD
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Dessert;