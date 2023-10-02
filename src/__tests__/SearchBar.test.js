import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../component/SearchBar';

test('renders SearchBar component and handles search', () => {
    const setAllCar = jest.fn();
    render(<SearchBar setAllCar={setAllCar} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    const searchIconElement = screen.getByAltText('search-icon');

    fireEvent.change(inputElement, { target: { value: 'Toyota' } });
    fireEvent.click(searchIconElement);

    expect(setAllCar).toHaveBeenCalledWith([{
        id: 1,
        img_url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Glanza/10231/1686812796183/front-left-side-47.jpg",
        kilometer: "6.1 km / 1-litre",
        model: "Hybrid",
        name: "Toyota RAV4",
        people: "4 People",
        price: "$440",
        transmission: "Automatic",
        year: 2024,
    },]);
});
