import React from "react";

export const Pagination: React.FC<Props> = ({ currentPage, pageNumber, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={currentPage === pageNumber ? "active-page-button" : "page-button"}>
      {pageNumber}
    </span>
  );
};

interface Props {
  currentPage: number;
  pageNumber: number;
  onClick: () => void;
}
