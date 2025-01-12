/* eslint-disable react/prop-types */

const BgCover = ({img, title, description, bgHyt, min}) => {
    return (
        <section className={`bg-fixed mx-auto flex justify-center items-center ${bgHyt} bg-cover bg-center`} style={{ backgroundImage: `url(${img})` }}>
            <div className={`px-16 bg-black bg-opacity-60 ${min} rounded-lg shadow-lg max-w-screen-lg flex flex-col items-center justify-center`}>
                <h2 className="text-5xl font-bold text-white">{title}</h2>
                <p className="mt-4 text-center text-lg text-white">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default BgCover;