import ReactStars from 'react-rating-stars-component';
import './SingleData.css';

const SingleData = ({ singleData }) => {
    const { heading, description, firstPicture, secondPicture, thirdPicture, userPicture } = singleData;
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
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
                    <div className='flex items-center mt-8'>
                        <div>
                            <img className='rounded-3xl' width={40} src={userPicture} alt="" />
                        </div>
                        <h5 className='font-bold text-lg ml-3 text-blue-700'>Kimberly R Mosoler</h5>
                    </div>

                    <div className='flex items-center mt-4'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <h3 className='mx-2'>476 total reviews for this teacher</h3>
                    </div>
                    <div className='flex items-center'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <h3 className='mx-2'>5 reviews for this class</h3>
                    </div>
                    <h4 className='font-semibold text-lg text-gray-800 mt-4'>Completed by 21 learners</h4>
                    <div className='flex items-center mt-8'>
                        <div className='my-4 mr-4'>
                            <button className='bg-blue-700 py-2 px-8 text-white font-normal text-lg rounded-full'>See Class Schedule <span className='text-2xl font-bold'>{">"}</span></button>
                        </div>
                        <div className='flex items-center justify-start ml-4'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className='text-xl mx-2 text-blue-800 font-semibold'>Save</span>
                            </div>
                            <div className='flex items-center ml-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                                <span className='text-xl text-blue-800 mx-2 font-semibold'>Share</span>
                            </div>
                        </div>
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