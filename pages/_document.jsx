import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <meta charset="utf-8" />
          <meta
            name="description"
            content="Data visualisation sur l'espérance de vie dans l'Union européenne avec les données de la banque mondiale. Créer par Anthony Menghi alias Anto CreaDev. DataViz - Life Span"
          />
          <meta
            name="keywords"
            content="DataViz, espérance de vie, Anto CreaDev, Anthony Menghi, Union européenne, Data visualisation, Life Span"
          />
          <meta name="author" content="Anthony Menghi" />

          <meta name="copyright" content="Anthony Menghi & Anto CreaDev" />
          <meta name="robots" content="index" />
          <title>DataViz - Life Span | Anto CreaDev </title>
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
