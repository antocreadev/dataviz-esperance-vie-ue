import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Data visualization of life expectancy in the European Union using World Bank data. Created by Anthony Menghi, aka Anto CreaDev. DataViz - Life Span"
          />
          <meta
            name="keywords"
            content="DataViz, life expectancy, Anto CreaDev, Anthony Menghi, antocreadev, antocrea.dev, European Union, Data visualization, Life Span"
          />
          <meta name="author" content="Anthony Menghi" />
          <meta
            name="robots"
            content="index, follow"
          /> {/* Added "follow" for better crawling */}
          <title>DataViz - Life Expectancy | Anto CreaDev</title> {/* Updated title for better keyword targeting */}
        </Head>
        <body data-theme="garden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
