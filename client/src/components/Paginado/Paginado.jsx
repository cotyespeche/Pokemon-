import React from "react";
import style from "./Paginado.modules.css";

export default function Paginado({ paisesPorPagina, totalPaises, paginar }) {
  const numeroDePaginas = [];

  for (let i = 1; i <= Math.ceil(totalPaises / paisesPorPagina); i++) {
    numeroDePaginas.push(i);
  }
  return (
    <div className={style.paginado}>
      <div style={{ display: "flex" }}>
        {numeroDePaginas.map((pagina) => {
          return (
            <button
              onClick={() => paginar(pagina)}
              key={pagina}
              className={style.btn}
            >
              {pagina}
            </button>
          );
        })}
      </div>
    </div>
  );
}
