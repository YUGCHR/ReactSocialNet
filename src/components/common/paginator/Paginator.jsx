import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({ totalCount, pageSize, currentPage, onPageChanges }) => {
  let getClassName = (p) => {
    return currentPage === p ? s.selectedPage : s.pageSelector;
  };

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={getClassName(p)}
            onClick={(e) => {
              onPageChanges(p);
            }}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
