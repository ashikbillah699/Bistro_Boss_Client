import chefR from '../assets/home/slide1.jpg'
import chef2 from '../assets/home/slide2.jpg'
import chef3 from '../assets/home/slide3.jpg'
import CommonHeader from '../sheard/CommonHeader';

const ChefRecommends = () => {
    const chefData = [
        {
            img: chefR,
            recepi: 'Caeser Salad',
            items: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'
        },
        {
            img: chef2,
            recepi: 'Caeser Salad',
            items: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'
        },
        {
            img: chef3,
            recepi: 'Caeser Salad',
            items: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'
        },
    ]
    return (
        <div className='max-w-screen-lg mx-auto'>
            <CommonHeader heading={'CHEF RECOMMENDS'} subHeading={'---Should Try---'}></CommonHeader>
            <div className='grid md:grid-cols-3 gap-6 justify-center items-center '>
                {
                    chefData.map((data, idx) => <div 
                    key={idx} 
                    className="text-center hover:bg-white transition-all duration-700 bg-gray-100 shadow-md rounded-lg border overflow-hidden">
                        <figure>
                            <img
                                src={data.img}
                                alt="Salad Image"
                                className="w-full h-72 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto text-lg font-semibold">{data.recepi}</h2>
                            <p className="text-sm text-gray-600">
                                {data.items}
                            </p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-outline btn-warning w-full">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;