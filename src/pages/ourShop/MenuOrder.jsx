/* eslint-disable react/prop-types */

const MenuOrder = ({ items }) => {
    const count = items.length;
    console.log(count)
    const { image, name, recipe,price } = items;
    return (
        <div
            className="card text-center hover:bg-white
                     transition-all duration-700 bg-gray-100 
                     shadow-md rounded-lg border overflow-hidden">
            <figure>
                <img
                    src={image}
                    alt="Salad Image"
                    className="w-full h-72 object-cover"
                />
            </figure>
            <p>Price: {price}</p>
            <div className="card-body">
                <h2 className="card-title mx-auto text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-600">
                    {recipe}
                </p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-warning w-full">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuOrder;