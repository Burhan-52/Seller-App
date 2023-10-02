import React from 'react'
import peoplecount from '../assesst/people.png'
import cartype from '../assesst/model.png'
import mileage from '../assesst/mileage.png'
import fuel from '../assesst/transmission.png'
import favourite from '../assesst/favourite.png'
import { MONTH, RENT } from '../config'

const CarCard = ({ carData }) => {

    const { img_url, name, year, people, model, kilometer, transmission, price } = carData

    return (
        <div className='w-72 flex justify-center bg-[#f1f4fb] rounded-xl mx-2 my-2 shadow-md'>
            <div className='py-2'>

                {/* Main Image  */}
                <img className='max-w-[270px]  rounded-lg mx-auto' src={img_url} alt='car_photo' />

                <div className='mx-3'>
                    {/* Name of car and Year */}
                    <div className='flex justify-between items-center mt-4'>
                        <div className='font-medium'>{name}</div>
                        <div className='text-xs w-12 px-2 py-[0.1rem] h-6 rounded-full border-2 border-dashed border-[#4d9bec] font-medium '>{year}</div>
                    </div>

                    {/* People and Model */}
                    <div className='grid grid-cols-2 gap-4 text-gray-600 text-xs font-medium mt-3 items-center'>
                        <div className='flex items-center'>
                            <img
                                src={peoplecount}
                                alt='people'
                                className='mr-2'
                            />
                            <div>{people}</div>
                        </div>
                        <div className='flex items-center '>
                            <img src={cartype}
                                alt='cartype'
                                className='mr-2'
                            />
                            <div>{model}</div>
                        </div>
                    </div>

                    {/* kilometer and Transmission */}
                    <div className='grid grid-cols-2  gap-4 text-gray-600 text-xs font-medium mt-3 items-center'>
                        <div className='flex items-center'>
                            <img
                                src={mileage}
                                alt='mileage'
                                className='mr-2'
                            />
                            <div>{kilometer}</div>
                        </div>
                        <div className='flex items-center '>
                            <img
                                src={fuel}
                                alt='transmission'
                                className='mr-2'
                            />
                            <div>{transmission}</div>
                        </div>
                    </div>

                    {/* Bottom line */}
                    <div className='border-b border-gray-300 my-3'></div>

                    {/* Price, Favourite, and Rent now Button */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex items-center'>
                            <span className='font-medium text-lg'>{price}</span>
                            <span className='mx-3 text-xs'>{MONTH}</span>
                        </div>
                        <div className='flex items-center'>
                            <img
                                src={favourite}
                                alt='Favourite'
                                className='mr-2 bg-[#daeafa] p-2 rounded-lg'
                            />
                            <button className='px-2 py-2 bg-[#4999ec] text-white text-xs font-semibold rounded-lg ml-3'>{RENT}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard