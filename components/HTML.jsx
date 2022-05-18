function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/dist/app/index.css" />
        <title>Iso-app</title>
      </head>
      <body id="root" dangerouslySetInnerHTML={{ __html: props.html }}></body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__PRELOADED_DATA__ = JSON.stringify(${props.serializedData})`,
        }}
      ></script>
      <script type="application/javascript" src="/dist/app/main.js" />
    </html>
  );
}

export default HTML;
