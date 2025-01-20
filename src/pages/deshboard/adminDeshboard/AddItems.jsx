import { FiPlusCircle } from "react-icons/fi";
import CommonHeader from "../../../sheard/CommonHeader";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const imgagHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${imgagHostingKey}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        const imgFile = {image: data.image[0]};

        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)
        if(res.data.success){
            const menuData = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuData);
            console.log(menuRes);
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully add your menu!!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(data)
    };



    return (
        <div>
            <CommonHeader heading={'ADD AN ITEM'} subHeading={'---What&apos;s new?---'}></CommonHeader>
            <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-0">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 space-y-7 rounded px-8 pt-6 pb-8 w-full max-w-3xl mb-16 mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="recipeName"
                            className="block text-gray-600 text-sm font-bold mb-2"
                        >
                            Recipe name*
                        </label>
                        <input
                            {...register('name', { required: true})}
                            type="text"
                            id="recipeName"
                            placeholder="Recipe name"
                            style={{ fontFamily: "Open Sans, sans-serif" }}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <label
                                htmlFor="category"
                                className="block text-gray-600 text-sm font-bold mb-2"
                            >
                                Category*
                            </label>
                            <select
                                {...register('category', { required: true})}
                                id="category"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                                defaultValue='Category'
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                            >
                                <option defaultValue={'Category'} disabled>Category</option>
                                <option value="offered">offered</option>
                                <option value="popular">popular</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="price"
                                className="block text-gray-600 text-sm font-bold mb-2"
                            >
                                Price*
                            </label>
                            <input
                                {...register('price', { required: true})}
                                type="number"
                                id="price"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                                placeholder="Price"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="recipeDetails"
                            className="block text-gray-600 text-sm font-bold mb-2"
                        >
                            Recipe Details*
                        </label>
                        <textarea
                            {...register('recipe', { required: true})}
                            id="recipeDetails"
                            placeholder="Recipe Details"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                            style={{ fontFamily: "Open Sans, sans-serif" }}
                            rows="4"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <input
                            {...register('image', { required: true})}
                            type="file"
                            id="file"
                            className="block  text-gray-600 text-sm rounded cursor-pointer focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="overflow-hidden flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 text-white font-bold rounded hover:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300"
                    >
                        <FiPlusCircle className="text-lg" /> Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;