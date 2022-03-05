import React from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Showcase } from "./Showcase/Showcase";
import { Commends } from "./Commends/Commends";
import { Card } from "./Commends/Card";
import { News } from "./News/News";
import { Product } from "./Products/Products";
import { ProductItem } from "./Products/ProductItem";
import { commends } from "./Commends/CommendsArray";
import { products } from "./Products/ProductsArray";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Commends>
        {commends.map((item) => {
          return (
            <Card
              key={item.title}
              image={item.image}
              date={item.date}
              title={item.title}
              contain={item.contain}
              autor={item.autor}
            />
          );
        })}
      </Commends>
      <News />
      <Product>
        {products.map((item) => {
          return (
            <ProductItem
              key={item.title}
              title={item.title}
              contain={item.contain}
            />
          );
        })}
      </Product>
      <Showcase />
    </React.Fragment>
  );
}

export default App;
