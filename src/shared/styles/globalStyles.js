import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: "Product Sans Regular", "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  @font-face {
    font-family: "Product Sans Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Regular"),
      url("ProductSans-Regular.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Italic"),
      url("ProductSans-Italic.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Thin Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Thin Regular"),
      url("ProductSans-Thin.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Light Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Light Regular"),
      url("ProductSans-Light.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Medium Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Medium Regular"),
      url("ProductSans-Medium.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Black Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Black Regular"),
      url("ProductSans-Black.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Thin Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Thin Italic"),
      url("ProductSans-ThinItalic.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Light Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Light Italic"),
      url("ProductSans-LightItalic.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Medium Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Medium Italic"),
      url("ProductSans-MediumItalic.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Bold";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Bold"), url("ProductSans-Bold.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Bold Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Bold Italic"),
      url("ProductSans-BoldItalic.woff") format("woff");
  }
  
  @font-face {
    font-family: "Product Sans Black Italic";
    font-style: normal;
    font-weight: normal;
    src: local("Product Sans Black Italic"),
      url("ProductSans-BlackItalic.woff") format("woff");
  }  
`;