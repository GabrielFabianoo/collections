import "./App.css";
import { AnimatePresence } from "framer-motion";

import Routes from "./components/Routes";

const App = () => {
  return (
    <AnimatePresence>
      <Routes />
    </AnimatePresence>
  );
};

export default App;
