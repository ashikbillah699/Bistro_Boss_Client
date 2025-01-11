import CommonHeader from "../sheard/CommonHeader";
import featuredImg from '../assets/home/featured.jpg'
import './ParallaxMenu.css'

const ParallaxMenu = () => {
    return (
        <div className='featured mt-32 bg-fixed'>
            <CommonHeader heading='FROM OUR MENU' subHeading='---Check it out---'></CommonHeader>
            <div className='md:flex justify-center items-center sm:text-center md:text-start gap-20 max-w-screen-lg mx-auto'>
                <div className='md:w-1/2'>
                    <img className='w-[500px] h-[310px] sm:mx-auto' src={featuredImg} alt="" />
                </div>
                <div className='space-y-1 md:w-1/2 sm:mt-5 md:mt-0'>
                    <h3 className="text-lg font-semibold">March 20, 2025</h3>
                    <h3 className="text-xl font-semibold">WHERE CAN I GET SOME?</h3>
                    <p className='text-sm pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod nobis quas
                        quasi. Eaque repellat recusandae ad laudantium tempore
                        consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='border-b-2 rounded-lg pb-2 px-4'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default ParallaxMenu;