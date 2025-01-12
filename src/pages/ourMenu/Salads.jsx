/* eslint-disable react/prop-types */
import BgCover from "../../sheard/BgCover";
import saladImg from '../../assets/menu/salad-bg.jpg'
import MenuItems from "../../sheard/MenuItems";

const Salads = ({ salad }) => {
    const saladData = salad.filter(dessert => dessert.category === 'salad')

    return (
        <div className="mt-10">
            <BgCover
                img={saladImg}
                title={'SALAD'}
                description={'Dramatically myocardinate equity invested best practices with diverse results.'}
                bgHyt={'min-h-[520px]'}
                min={'min-h-[220px] max-w-screen-md'}
            ></BgCover>
            <div className="max-w-screen-lg mx-auto pb-10">
                <div className="grid md:grid-cols-2 gap-10 my-8">
                    {
                        saladData.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center">
                    <button className='border-b-2 rounded-lg pb-2 px-4 border-black font-bold'>ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default Salads;