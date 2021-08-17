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
        <div className="page-button" onClick={prevPage}>
          Back
        </div>
      )}
      <div className="page-button current-page-button">{currentPage}</div>
      {currentPage < totalPage && (
        <div className="page-button" onClick={nextPage}>
          Next
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
