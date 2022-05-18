const About = require("../pages/About").default;
const Home = require("../pages/Home").default;

module.exports = [
  {
    path: "/",
    element: <Home />,
    fetchData: async (params) => {
      return Promise.resolve({ page: "HOME", data: {} });
    },
  },
  {
    path: "/about",
    element: <About />,
    fetchData: async (params) => {
      return Promise.resolve({ page: "ABOUT", data: { params } });
    },
  },
];
