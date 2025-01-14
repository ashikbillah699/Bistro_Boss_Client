import { Helmet } from "react-helmet";
import BgCover from "../../sheard/BgCover";
import shopImg from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import MenuOrder from "./MenuOrder";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const OurShop = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')

    const { category } = useParams();
    console.log(category);
    const [selectTeb, setSelectTeb] = useState(category || 'salad')

    useEffect(()=>{
        if(category){
            setSelectTeb(category)
        }

    },[category])

    console.log(pizza)

    return (
        <div>
            <Helmet>
                <title>Bistro | Our Shop</title>
            </Helmet>
            <BgCover
                img={shopImg}
                title={'Our Shop'}
                description={'Assertively evisculate frictionless potentialities.'}
                bgHyt={'min-h-[650px]'}
                min={'h-[250px] w-full'}
            ></BgCover>
            <div className=" mx-auto max-w-screen-lg">
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                     type="radio" 
                     name="my_tabs_1" 
                     role="tab" 
                     className="tab" 
                     aria-label="salad" 
                     checked={selectTeb === 'salad'}
                     onChange={()=> setSelectTeb === 'salad'}
                     defaultChecked/>
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                salad.map(items => <MenuOrder key={items._id} items={items}></MenuOrder>)
                            }
                        </div>
                    </div>

                    <input 
                     checked={selectTeb === 'pizza'}
                     onChange={()=> setSelectTeb === 'pizza'}
                    type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="pizza" />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                pizza.map(items => <MenuOrder key={items._id} items={items}></MenuOrder>)
                            }
                        </div>
                    </div>

                    <input
                    checked={selectTeb === 'soup'}
                    onChange={()=> setSelectTeb === 'soup'}
                     type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="soups" />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                soup.map(items => <MenuOrder key={items._id} items={items}></MenuOrder>)
                            }
                        </div>
                    </div>

                    <input
                         checked={selectTeb === 'dessert'}
                         onChange={()=> setSelectTeb === 'dessert'}
                    type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="desserts" />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                dessert.map(items => <MenuOrder key={items._id} items={items}></MenuOrder>)
                            }
                        </div>
                    </div>

                    <input 
                     checked={selectTeb === 'drinks'}
                     onChange={()=> setSelectTeb === 'drinks'}
                    type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="drinks" />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                drinks.map(items => <MenuOrder key={items._id} items={items}></MenuOrder>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShop;