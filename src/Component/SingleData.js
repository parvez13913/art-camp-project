import React from 'react';
import './SingleData.css';

const SingleData = ({ singleData }) => {
    const { heading, description, firstPicture, secondPicture, thirdPicture, userPicture } = singleData;
    return (
        <div className='google-font'>
            <div>
                <h1 className='text-5xl mx-4 font-bold leading-normal'>{heading}</h1>
                <h6 className='mx-4 text-gray-500 font-bold'>
                    <a href="#">Multi-Day Course ?</a>
                </h6>
            </div>
            <div className='my-8 grid grid-cols-2'>
                <div className='col-2'>
                    <p>{description}</p>
                    <div>
                        <div>
                            <img src={userPicture} alt="" />
                        </div>
                        <h5>Kimberly R Mosoler</h5>
                    </div>
                </div>
                <div className='columns-2'>
                    <div>
                        <img src={firstPicture} alt="first-picture" />
                    </div>
                    <div className='my-12'>
                        <img src={secondPicture} alt="second-picture" />
                    </div>
                    <div>
                        <img src={thirdPicture} alt="third-picture" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;