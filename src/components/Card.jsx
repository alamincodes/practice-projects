import React from 'react';
import arrow from '../Images/icons/arrow.png';
const Card = () => {
    return (
        <section className='container mx-auto bg-[#171B29] p-4 rounded-xl'>
            <div className='flex items-center justify-evenly p-4 rounded-lg bg-gradient-to-r from-primary to-secondary'>
                <div className=''>
                    <h2 className='text-2xl'>Contact us now & start exploring the endless possibilities</h2>
                </div>
                <div>
                    <img src={arrow} className="w-[239.17px] h-[114.36px]" alt="" />
                </div>
                <button className='border p-3 rounded-full px-7'>GET STARTED</button>
            </div>
        </section>
    );
};

export default Card;