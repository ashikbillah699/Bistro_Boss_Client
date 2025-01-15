import { Helmet } from "react-helmet";
import BgCover from "../../sheard/BgCover";
import shopImg from '../../assets/shop/banner2.jpg';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import MenuOrder from "./MenuOrder";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const OurShop = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    const { category } = useParams();
    const [selectTab, setSelectTab] = useState(category || 'salad');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const getCategoryItems = () => {
        switch (selectTab) {
            case 'salad':
                return salad;
            case 'pizza':
                return pizza;
            case 'soup':
                return soup;
            case 'dessert':
                return dessert;
            case 'drinks':
                return drinks;
            default:
                return salad;
        }
    };

    const currentItems = getCategoryItems().slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(getCategoryItems().length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        if (category) {
            setSelectTab(category);
            setCurrentPage(1);
        }
    }, [category,setSelectTab,setCurrentPage]);

    return (
        <div>
            <Helmet>
                <title>Bistro | Our Shop</title>
            </Helmet>
            <BgCover
                img={shopImg}
                title={'Our Shop'}
                description={'Assertively evisculate frictionless potentialities.'}
                bgHyt={'min-h-[650px]'}
                min={'h-[250px] w-full'}
            />
            <div className=" mx-auto max-w-screen-lg">
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="salad"
                        checked={selectTab === 'salad'}
                        onChange={() => setSelectTab('salad')}
                    />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                currentItems.map(items => <MenuOrder key={items._id} items={items} />)
                            }
                        </div>
                    </div>

                    {/* Pizza Tab */}
                    <input
                        checked={selectTab === 'pizza'}
                        onChange={() => setSelectTab('pizza')}
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="pizza"
                    />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                currentItems.map(items => <MenuOrder key={items._id} items={items} />)
                            }
                        </div>
                    </div>

                    {/* Soup Tab */}
                    <input
                        checked={selectTab === 'soup'}
                        onChange={() => setSelectTab('soup')}
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="soups"
                    />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                currentItems.map(items => <MenuOrder key={items._id} items={items} />)
                            }
                        </div>
                    </div>

                    {/* Dessert Tab */}
                    <input
                        checked={selectTab === 'dessert'}
                        onChange={() => setSelectTab('dessert')}
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="desserts"
                    />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                currentItems.map(items => <MenuOrder key={items._id} items={items} />)
                            }
                        </div>
                    </div>

                    {/* Drinks Tab */}
                    <input
                        checked={selectTab === 'drinks'}
                        onChange={() => setSelectTab('drinks')}
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="drinks"
                    />
                    <div role="tabpanel" className="tab-content mt-10">
                        <div className="grid md:grid-cols-3 gap-6 justify-center items-center ">
                            {
                                currentItems.map(items => <MenuOrder key={items._id} items={items} />)
                            }
                        </div>
                    </div>

                    {/* Pagination */}

                </div>
                <div className="pagination mt-5 flex space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-5 py-1 text-white border 
                        ${currentPage === index + 1 ? 'bg-black font-bold' : 'bg-gray-300'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurShop;
