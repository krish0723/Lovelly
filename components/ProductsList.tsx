import type { NextPage } from 'next'
import React, { useState, useEffect, useContext} from 'react';
import styles from '../styles/Home.module.css'
import DepopIcon from './icons/depop.svg'
import { Image, Main, Heading, Paragraph, Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import {
  Instagram,
  Shop,
  Cart
} from 'grommet-icons';
import { useRouter } from 'next/router';

export default function ProductsList() {
    const router = useRouter();
    // load our products state variable
    const [products, setProducts] = useState([]);
    const [prodImg, setProdImg] = useState([]);


    function handleProdClick(id){
        router.push({ pathname: "/product", query: { id: id } })
    }

    const getProducts = async () => {
         const response = await fetch("/api/getproducts");
         const data = await response.json();
         setProducts(JSON.parse(data));
         console.log(products);
    }
    useEffect(() => {
            getProducts();
        }, [])
    //

    // build areas list for our grid
    const areaVar = "area";
    const cols = 3;
    var r = 0;
    var c = 0;
    var areas = []
    for (let x = 1; x < products.length+1; x++){
        const name = areaVar+x.toString()
        areas.push({ name: name, start: [r,c], end: [r,c]  })
        r += 1
        if (x % 3 == 0){
            r = 0
            c += 1
        }
    }
    //

    console.log(areas);

    // create our product objects for our grid
    var productObjs = [];
    if (typeof products != "undefined" && products != null){
        productObjs = products.map((product, index) => {
            return(
            <Box
              key={product._id}
              gridArea= {areas[index].name}
              background="#003311"
              direction="column"
              pad="none"
              align="center"
              onClick={() => {handleProdClick(product._id)}}
            >
                <Image
                  src={product.frontImage} fill={true} fit="cover"
                  onMouseOver={e => (e.currentTarget.src = product.backImage)}
                  onMouseOut={e => (e.currentTarget.src = product.frontImage)}
                />
                <Box
                  direction="row"
                  pad="xsmall"
                  align="center"
                  gap="large"
                  justify="between"
                  animation="fadeIn"
                >
                  <Text color="#fff" size="medium">{product.name}</Text>
                  <Text color="#fff" size="medium">{product.color}</Text>
                  <Text color="#fff" size="medium">{product.price} USD</Text>
                  <Text color="#fff" size="medium">{product.size}</Text>
                </Box>
           </Box>
            );
        });
    }

    //
    const rows = []
    for (let i = 0; i < r; i++){
        rows.push('large')
    }
    return (
        <Grid
          rows={rows}
          columns={['flex', 'flex', 'flex']}
          gap="none"
          areas={areas}
        >
          {productObjs}
        </Grid>
    );
}
