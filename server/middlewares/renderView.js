const { matchRoutes } = require("react-router");
const { renderToString } = require("react-dom/server");
const App = require("../../App").default;
const routes = require("../../shared/routes");

const HTML = require("../../components/HTML.jsx").default;

const renderViewMiddleware = async (req, res, next) => {
  let helmetContext = {};
  let promise;
  const matches = matchRoutes(routes, req.url);
  matches.forEach(async (match) => {
    if (match.route.fetchData) {
      promise = match.route.fetchData(match.params);
    } else {
      promise = Promise.resolve(null);
    }
  });
  promise.then((json) => {
    const app = renderToString(
      <App
        location={req.url}
        context={helmetContext}
        contextData={JSON.stringify(json)}
        server
      />
    );
    let { helmet } = helmetContext;
    const html = renderToString(
      <HTML html={app} data={JSON.stringify(json)} />
    );
    let htmlArr = html.split("</head>");
    res.send(
      `<!DOCTYPE html>${
        htmlArr[0] +
        helmet.title.toString() +
        helmet.meta.toString() +
        "</head>" +
        htmlArr[1]
      }`
    );
  });
};

module.exports = renderViewMiddleware;
