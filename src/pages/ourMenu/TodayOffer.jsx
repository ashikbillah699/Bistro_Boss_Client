/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import CommonHeader from "../../sheard/CommonHeader";
import MenuItems from "../../sheard/MenuItems";


const TodayOffer = ({ offered }) => {
    const offersData = offered.filter(item => item.category === 'offered')
    return (
        <div className="max-w-screen-lg mx-auto pb-10">
            <CommonHeader heading='TODAY&apos;S OFFER' subHeading='---Check Offer&apos;s---'></CommonHeader>
            <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    offersData.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center">
                <Link to='/ourShop/salad'>
                    <button className='border-b-2 rounded-lg pb-2 px-4 border-black font-bold'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default TodayOffer;