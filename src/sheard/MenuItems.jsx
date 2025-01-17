/* eslint-disable react/prop-types */

const MenuItems = ({ item }) => {
    // console.log(item)
    const {name,recipe,image,price} = item;

    return (
        <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full">
                <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            </div>
            <div className="flex-1 pb-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{name} ------------------</h3>
                    <span className="text-yellow-600 font-bold">$ {price}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItems;