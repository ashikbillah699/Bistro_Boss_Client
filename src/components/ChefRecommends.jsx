// import chefR from '../assets/home/slide1.jpg'
// import chef2 from '../assets/home/slide2.jpg'
// import chef3 from '../assets/home/slide3.jpg'
import useMenu from '../hooks/useMenu';
import MenuOrder from '../pages/ourShop/MenuOrder';
import CommonHeader from '../sheard/CommonHeader';

const ChefRecommends = () => {
    const [menu] = useMenu()

    const chefData = menu.slice(0, 3)

    return (
        <div className='max-w-screen-lg mx-auto'>
            <CommonHeader heading={'CHEF RECOMMENDS'} subHeading={'---Should Try---'}></CommonHeader>
            <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                chefData.map(items => <MenuOrder key={items._id} items={items} />)
                            }
                        </div>
        </div>
    );
};

export default ChefRecommends;