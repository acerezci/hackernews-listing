import React from "react";
import "../styles/pagination.css";

export const Pagination: React.FC<Props> = ({ currentPage, setCurrentPage, totalPage }) => {
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="page-button-container">
      {currentPage > 1 && (
        <div className="page-button pointer" onClick={prevPage}>
          &#8610; Prev
        </div>
      )}
      <div className="page-button current-page-button pointer">{currentPage}</div>
      {currentPage < totalPage && (
        <div className="page-button pointer" onClick={nextPage}>
          Next &#8611;
        </div>
      )}
    </div>
  );
};

interface Props {
  currentPage: number;
  setCurrentPage: (e: number) => void;
  totalPage: number;
}
