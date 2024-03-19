import React, { useState } from 'react'

const Pagination = ({ recipesPerPage, totalPages, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= 25; i++) {
        pageNumbers[i - 1] = i;
    }

    console.log(pageNumbers);

    const [activePage, setActivePage] = useState(1);
    const handlePageClick = (number) => {
        setActivePage(number);
        paginate(number);
    }


  return (
    <div>
        <nav>
            <ul className=' flex gap-3'>
                {
                    pageNumbers.map((number, i) => (
                        <li className={`${number == activePage && "border rounded-md border-black p-1 px-3 font-medium"} p-1 cursor-pointer`} onClick={() => handlePageClick(number)} key={i}>{number}</li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Pagination