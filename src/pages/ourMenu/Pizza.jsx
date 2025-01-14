/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import PizzaImg from '../../assets/menu/pizza-bg.jpg'
import BgCover from '../../sheard/BgCover';
import MenuItems from '../../sheard/MenuItems';

const Pizza = ({ pizzas }) => {
    const PizzaData = pizzas.filter(dessert => dessert.category === 'pizza')
    return (
        <div className="mt-10">
            <BgCover
                img={PizzaImg}
                title={'PIZZA'}
                description={'Dramatically myocardinate equity invested best practices with diverse results.'}
                bgHyt={'min-h-[520px]'}
                min={'min-h-[220px] max-w-screen-md'}
            ></BgCover>
            <div className="max-w-screen-lg mx-auto pb-10">
                <div className="grid md:grid-cols-2 gap-10 my-8">
                    {
                        PizzaData.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center">
                    {
                        PizzaData.length > 0 && (
                            <Link to={`/ourShop/${PizzaData[0].category}`}> 
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

export default Pizza;