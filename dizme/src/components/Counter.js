import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Importa el hook

const Counter = ({ end, decimals }) => {
  const [ref, inView] = useInView(); // Crea una referencia y un estado de visibilidad

  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => {
        if (inView) {
          start(); // Inicia el contador cuando el elemento esté visible
        }
        return (
          <span
            className="count-text"
            data-from="0"
            data-to={end}
            ref={(el) => {
              ref(el); // Asigna la referencia de `useInView`
              countUpRef(el); // Asigna la referencia de `react-countup`
            }}
          >
            count
          </span>
        );
      }}
    </CountUp>
  );
};

export default Counter;