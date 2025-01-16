import MenuItems from "../sheard/MenuItems";
import CommonHeader from "../sheard/CommonHeader";
import useMenu from "../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular');

    return (
        <div className="max-w-screen-lg mx-auto pb-10">
            <CommonHeader heading='FROM OUR MENU' subHeading='---Check it out---'></CommonHeader>
            <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    popularMenu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center">
            <Link to={'/ourMenu'} className='border-b-2 rounded-lg pb-2 px-4 border-black font-bold'>View All Menu</Link>
            </div>
        </div>
    );
};

export default PopularMenu;