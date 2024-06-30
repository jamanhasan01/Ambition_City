import React from 'react';
import Container from '../Container';

const CardPackagesInfo = () => {
    return (
        <Container>
            <div className="flex justify-between mx-5 my-5 py-[50px]">
            <div className="w-1/3 flex flex-col gap-2">
                <h2 className="text-lg mb-2 h5">Things to know</h2>
                <p className='p1'>House rules</p>
                <p className='p1'>Check-in: 3:00 PM - 11:00 PM</p>
                <p className='p1'>Checkout before 11:00 AM</p>
                <p className='p1'>2 guests maximum</p>
                <a href="#" className="text-blue-500">Show more</a>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
                <h2 className="text-lg mb-2 h5">Safety & property</h2>
                <p className='p1'>Carbon monoxide alarm not reported</p>
                <p className='p1'>Smoke alarm</p>
                <a href="#" className="text-blue-500">Show more</a>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
                <h2 className="text-lg mb-2 h5">Cancellation policy</h2>
                <p className='p1'>Free cancellation before May 19.</p>
                <p className='p1'>Review the Host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
                <a href="#" className="text-blue-500">Show more</a>
            </div>
        </div>
        </Container>
    );
}

export default CardPackagesInfo;
