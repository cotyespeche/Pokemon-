import React from "react";
import style from "./Pagination.modules.css";


// const pagination = (props) => {
//   return (
//     <button>Siguiente</button>
//   )
// }

// export default pagination;

export default function Pagination({ pokesPerPage,usePoke, paginated, currentPage }) {
  const pageNumber = [];

  // for (let i = 1; i <= Math.ceil(usePoke / PokemonsPerPage); i++) {
  //   pageNumber.push(i);
  for (let i = 0; i <= Math.ceil(usePoke / pokesPerPage) - 1; i++) {
		pageNumber.push(i + 1);
  }
  return (
    <div className={style.pagination}>
      <div style={{ display: "flex" }}>
        {pageNumber.map((page) => {
          return (
            <button
              onClick={() => paginated (page)}
              key={page}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
