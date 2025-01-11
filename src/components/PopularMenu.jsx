import { useEffect, useState } from "react";
import MenuItems from "../sheard/MenuItems";
import CommonHeader from "../sheard/CommonHeader";


const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([]);

    useEffect(() => {
        fetch(`menu.json`)
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                console.log(popularItems)
                setPopularMenu(popularItems);
            })
    }, [])
    return (
        <div className="max-w-screen-lg mx-auto pb-10">
            <CommonHeader heading='FROM OUR MENU' subHeading='---Check it out---'></CommonHeader>
            <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    popularMenu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center">
            <button className='border-b-2 rounded-lg pb-2 px-4 border-black font-bold'>View All Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;