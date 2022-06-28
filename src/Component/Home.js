import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(result => setData(result));
    }, [])
    return (
        <div className='m-4'>
            {
                data.map(singleData => <SingleData
                    key={singleData._id}
                    singleData={singleData}
                />)
            }
        </div>
    );
};

export default Home;