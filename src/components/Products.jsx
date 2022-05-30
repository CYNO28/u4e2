import React from "react";
import AddProduct from "./AddProduct.jsx";
import { Flex, Grid } from "@chakra-ui/react";

import Pagination from "./Pagination.jsx";
import Product from "./Product.jsx";
import { useState, useEffect, useRef } from "react";
const Products = () => {
  const [page, setpage] = useState(1);
  const [length, setlength] = useState(0);
  const [limit, setlimit] = useState(3);
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((data) => {
        setlength(data.length);
      });
  }, [page, limit]);

  return (
    <Flex
      alignItems="center"
      gap="2"
      flexDirection="column"
      justifyContent="center "
    >
      <AddProduct
        products={products}
        setProducts={setProducts}
        page={page}
      
        setpage={setpage}
      />
      {/*  AddProduct */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap="4"
        p="6"
        borderRadius="lg"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      >
        {/* List of Products */}
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Grid>
      <Pagination
        setpage={setpage}
        setlimit={setlimit}
        page={page}
        limit={limit}
        length={length}
      />
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
