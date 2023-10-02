import React from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

const Pagination = ({ currentPage, totalPages }) => {

    const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className='w-2/3 mt-auto flex justify-between mx-56 rounded-xl py-4 px-3 shadow-md '>
            <div className='text-xs '>
                {` ${currentPage} from ${totalPages}`}
            </div>

            <div className='flex items-center'>
                {currentPage > 1 && (
                    <Link to={`/page/${currentPage - 1}`}>
                        <div className='mx-1 bg-white px-2 py-[0.4rem] rounded-md'>
                            <img
                                className='w-3 '
                                src={leftArrow}
                                alt='leftArrow'
                            />
                        </div>
                    </Link>
                )}
                {pageNumbers.map((number) => (
                    <Link
                        to={`/page/${number}`}
                        key={number}
                        className={currentPage === number ? 'bg-blue-500 text-white mx-1 px-2 rounded-md' : 'bg-white mx-1 px-2 rounded-md'}
                    >
                        {number}
                    </Link>
                ))}
                {currentPage < 10 && (
                    <Link to={`/page/${currentPage + 1}`}>
                        <div
                            className='mx-1 bg-white px-2 py-[0.4rem] rounded-md'>
                            <img className='w-3'
                                src={rightArrow}
                                alt='rightArrow'
                            />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Pagination;
