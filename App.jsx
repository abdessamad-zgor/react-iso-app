import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";

function App(props) {
  let Router = process.env.BROWSER ? BrowserRouter : StaticRouter;

  let routerProps = process.env.BROWSER
    ? { basename: "/" }
    : { location: props.location };
  let helmetProps = process.env.BROWSER ? {} : { context: props.context };

  return (
    <HelmetProvider {...helmetProps}>
      <Router {...routerProps}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
