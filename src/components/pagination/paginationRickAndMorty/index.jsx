import { useState } from "react";
import { PaginationRick } from "../../styledComponents/pagination/styled";
import { motion } from "framer-motion";

const PaginationRickAndMorty = ({ page, setPage, info, pageNumbers }) => {
  const [hideNumber, setHideNumber] = useState({
    startHide: 0,
    finishHide: 5,
  });
  const { startHide, finishHide } = hideNumber;

  const firstPage = () => {
    setPage(1);
    setHideNumber({
      startHide: 0,
      finishHide: 5,
    });
  };

  const nextPage = () => {
    if (page < info.pages && finishHide - startHide === 5) {
      setPage(page + 1);
      setHideNumber({
        startHide: startHide + 1,
        finishHide: finishHide + 1,
      });
    }
  };
  const prevPage = () => {
    if (page > 1 && finishHide - startHide === 5) {
      setPage(page - 1);
      setHideNumber({
        startHide: startHide - 1,
        finishHide: finishHide - 1,
      });
    }
  };
  const lastPage = () => {
    setPage(34);
    setHideNumber({
      startHide: info.pages - 6,
      finishHide: info.pages,
    });
  };
  const getPage = (number) => {
    setPage(number);
    if (
      finishHide - number < (finishHide - startHide) / 2 &&
      finishHide - startHide === 5 &&
      finishHide < info.pages - 1
    ) {
      setHideNumber({
        startHide: startHide + 1,
        finishHide: finishHide + 1,
      });
    } else if (
      finishHide - number > (finishHide - startHide) / 2 &&
      finishHide - startHide === 5 &&
      startHide > 0
    ) {
      setHideNumber({
        startHide: startHide - 1,
        finishHide: finishHide - 1,
      });
    }
  };

  return (
    <>
      <PaginationRick>
        <div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <button onClick={firstPage}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/skip-to-start.png"
                alt="inicio"
              />
            </button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <button onClick={prevPage}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/back.png"
                alt="Pag Anterior"
              />
            </button>
          </motion.div>

          {pageNumbers.map((number, idx) => {
            if (idx >= startHide && idx <= finishHide) {
              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                >
                  <button onClick={() => getPage(number)}>{number}</button>
                </motion.div>
              );
            }
            return null;
          })}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <button onClick={nextPage}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/more-than.png"
                alt="Proxima pagina"
              />
            </button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
          >
            <button onClick={lastPage}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/end.png"
                alt="ultima pagina"
              />
            </button>
          </motion.div>
        </div>
      </PaginationRick>
    </>
  );
};

export default PaginationRickAndMorty;
