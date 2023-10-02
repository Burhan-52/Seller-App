import React, { useState } from 'react';
import { carData } from '../mockData';
import CarCard from './CarCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { MESSAGE } from '../config';
import usePagination from '../hooks/usePagination';

const CarContainer = () => {

    const [allcar, setAllCar] = useState(carData);

    const [currentPage, totalPages, displayedCars] = usePagination(allcar)

    return (
        <>
            <SearchBar
                setAllCar={setAllCar}
            />

            <div className=' flex justify-center flex-wrap px-10 py-2 mx-10'>
                {displayedCars.length < 0 ? (
                    <div className='my-5'>{MESSAGE}</div>
                ) : (
                    displayedCars.map((car) => (
                        <CarCard
                            key={car.id}
                            carData={car}
                        />
                    ))
                )}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>

    );
}

export default CarContainer;
