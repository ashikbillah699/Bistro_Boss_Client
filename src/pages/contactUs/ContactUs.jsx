import { Helmet } from "react-helmet";
import BgCover from "../../sheard/BgCover";
import contactImg from '../../assets/contact/banner.jpg'
import CommonHeader from "../../sheard/CommonHeader";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";



const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Our Shop</title>
            </Helmet>
            <BgCover
                img={contactImg}
                title={'CONTACT Us'}
                description={'Assertively evisculate frictionless potentialities.'}
                bgHyt={'min-h-[650px]'}
                min={'h-[250px] w-full'}
            />
            <div>
                <CommonHeader subHeading={'---Visit Us---'} heading={'OUR LOCATION'}></CommonHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-screen-lg mx-auto">
                    {/* Phone Card */}
                    <div className="border rounded-lg shadow-lg">
                        <div className="bg-[#D1A054] flex justify-center items-center h-16">
                            <FaPhoneAlt className="text-white text-2xl" />
                        </div>
                        <div className="p-6 mx-6 text-center bg-gray-100">
                            <h3 className="font-bold text-lg mb-2">PHONE</h3>
                            <p className="text-gray-600">+38 (012) 34 56 789</p>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="border rounded-lg shadow-lg">
                        <div className="bg-[#D1A054] flex justify-center items-center h-16">
                            <FaMapMarkerAlt className="text-white text-2xl" />
                        </div>
                        <div className="p-6 mx-6 text-center bg-gray-100">
                            <h3 className="font-bold text-lg mb-2">ADDRESS</h3>
                            <p className="text-gray-600">+38 (012) 34 56 789</p>
                        </div>
                    </div>

                    {/* Working Hours Card */}
                    <div className="border rounded-lg shadow-lg">
                        <div className="bg-[#D1A054] flex justify-center items-center h-16">
                            <FaClock className="text-white text-2xl" />
                        </div>
                        <div className="pb-6 mx-6 mb-6 text-center bg-gray-100">
                            <h3 className="font-bold text-lg mb-2">WORKING HOURS</h3>
                            <p className="text-gray-600">
                                Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CommonHeader subHeading={'---Send Us a Message---'} heading={'CONTACT FORM'}></CommonHeader>
                <div className="p-6  flex justify-center items-center min-h-screen">
                    <div className="bg-gray-100 shadow-lg rounded-lg p-8 w-full max-w-4xl">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="md:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="md:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message*
                                </label>
                                <textarea
                                    placeholder="Write your message here"
                                    className="textarea textarea-bordered w-full h-32"
                                ></textarea>
                            </div>

                            {/* Captcha Section */}
                            <div className="md:col-span-2 flex bg-white items-center gap-8 w-4/12 py-2 rounded-md pl-3">
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary"
                                    />
                                    <small className="font-bold">I’m not a robot</small>
                                </div>
                                <img
                                    src="https://parkershaw.co.uk/assets/site/_ar16x9retina/IMG_4942_2023-04-25-154910_knpx.jpeg"
                                    alt="reCAPTCHA demo"
                                    className="w-20 h-12"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 flex justify-center">
                                <button className="btn bg-yellow-700 text-white border-none hover:bg-yellow-800">
                                    Send Message <span className="ml-2">
                                        <IoIosSend />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;