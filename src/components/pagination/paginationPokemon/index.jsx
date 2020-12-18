import { useState } from "react";
import { PaginationPoke } from "../../styledComponents/pagination/styled";
import { motion } from "framer-motion";

const PaginationPokemon = ({ page, setPage, pageNumbers }) => {
  const [totalPages] = useState(7);
  const [hideNumber, setHideNumber] = useState({
    startHide: 0,
    finishHide: 5,
  });
  const { startHide, finishHide } = hideNumber;

  const firstPage = () => {
    setPage(0);
    setHideNumber({
      startHide: 0,
      finishHide: 5,
    });
  };

  const nextPage = () => {
    page < 140 && setPage(page + 20);
    if (finishHide < totalPages && finishHide - startHide === 5) {
      setHideNumber({
        startHide: startHide + 1,
        finishHide: finishHide + 1,
      });
    }
  };
  const PrevPage = () => {
    page > 0 && setPage(page - 20);
    if (startHide > 0) {
      setHideNumber({
        startHide: startHide - 1,
        finishHide: finishHide - 1,
      });
    }
  };
  const lastPage = () => {
    setPage(140);
    setHideNumber({
      startHide: totalPages - 5,
      finishHide: totalPages,
    });
  };

  const getPage = (number) => {
    setPage(number * 20);

    if (
      finishHide - number < (finishHide - startHide) / 2 &&
      finishHide - startHide === 5 &&
      finishHide < totalPages
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
      <PaginationPoke>
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
            <button onClick={PrevPage}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/back.png"
                alt="voltar"
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
                alt="next page"
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
                alt="last page"
              />
            </button>
          </motion.div>
        </div>
      </PaginationPoke>
    </>
  );
};

export default PaginationPokemon;
