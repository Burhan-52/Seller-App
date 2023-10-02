import { useParams } from "react-router-dom";
import { PRODUCT_PER_PAGE } from "../config";

const usePagination = (allcar) => {

    const { page } = useParams();

    const productsPerPage = PRODUCT_PER_PAGE;

    const currentPage = parseInt(page) || 1;

    const totalProducts = allcar.length;

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const startIdx = (currentPage - 1) * productsPerPage;

    const endIdx = Math.min(startIdx + productsPerPage, totalProducts);

    const displayedCars = allcar.slice(startIdx, endIdx);

    return [currentPage, totalPages, displayedCars]
}

export default usePagination