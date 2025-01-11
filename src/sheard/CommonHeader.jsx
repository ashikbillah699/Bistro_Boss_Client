/* eslint-disable react/prop-types */


const CommonHeader = ({heading, subHeading}) => {

    return (
        <div className="py-10 text-center">
            <small className="block italic text-yellow-500">{subHeading}</small><br />
            <span className="text-xl font-bold  border-y py-3 px-10">{heading}</span>
        </div>
    );
};

export default CommonHeader;