export const handleSearch = (searchText, allcar) => {
    const filteredCar = allcar.filter((car) => {
        return car?.name?.toLowerCase().includes(searchText.toLowerCase())
    })
    return filteredCar
}