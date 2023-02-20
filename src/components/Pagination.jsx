import React, { useEffect, useState } from "react";
import duyurular from "./duyuru.js";
import createDuyuru from "./DuyuruFrame";
import "./pagestyle.css";
const renderData = (data) => {
  return <ul>{data.map(createDuyuru)}</ul>;
};

function Pagination() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);

  const [pageNumberLimit, setpageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    setData(duyurular);
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <>
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <button
          className="page-btn"
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>

        {renderPageNumbers}

        <button
          className="page-btn"
          onClick={handleNextbtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </ul>
    </>
  );
}

export default Pagination;
