import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import { Image, FormField, TextInput, RadioButtonGroup, Paragraph, Form,  Nav, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import ContactHeaderUnit from '../components/ContactHeaderUnit'
import FooterUnit from '../components/FooterUnit'
import OriginUnit from '../components/OriginUnit'
import ShopUnit from '../components/ShopUnit'
import {
  CaretRightFill,
  Shop,
  Cart
} from 'grommet-icons';
import { useRouter } from "next/router"

const Product: NextPage = ({id}) => {
    // requests to our api

    // anything to pull on load
    useEffect(() => {
            const getProduct = async () => {
                 const response = await fetch("/api/getproduct", {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({id:id})
                 });
                 const data = await response.json();
                 console.log(data);
                 setProduct(JSON.parse(data));

            }
            getProduct();
        }, []);





    // state vars
    const [sidebar, setSidebar] = useState(true);
    const [value, setValue] = useState(true);
    const [customSize, setCustomSize] = useState(true);
    const [product, setProduct] = useState({});
    const [descFit, setDescFit] = useState(true);

    var desc = "";
    if (descFit == true){
        desc = product.description;
    }else{
        desc = product.fit;
    }


      return (
          <Grommet
              full={true}
              theme={{
                  global: { font: {
                              family: "Alice"
                            }},
                paragraph: {
                    font: {
                      family: 'Arial',
                    },
                },
                label: {
                    font: {
                      family: 'Arial',
                    },
                  },
              }}
          >
            <ContactHeaderUnit/>
            <Grid
              rows={['flex']}
              columns={['flex', 'flex']}
              gap="none"
              areas={[
                { name: 'left', start: [0, 0], end: [0, 0] },
                { name: 'right', start: [1, 0], end: [1, 0] },
              ]}
            >
              <Box
                gridArea="left"
                background="#fffced"
                direction="column"
                pad="none"
                align="start"
                animation="fadeIn"
              >
              <Image
                src={product.frontImage}
                fill={true} fit="cover"
              />
              <Image
                src={product.backImage}
                fill={true} fit="cover"
              />

             </Box>
             <Box
               gridArea="right"
               background="#fffced"
               direction="row"
               pad="large"
               align="start"
               animation="fadeIn"
             >
                 <Box
                   direction="column"
                   pad="none"
                   gap="medium"
                   align="start"
                   animation="fadeIn"
                   width={{min:"small"}}
                   style={{ position: 'fixed' }}
                 >
                     <Text size="medium" weight="bold" color="#000">{product.name}</Text>
                     <Text size="medium" weight="bold" color="#000">Color</Text>
                     <Text size="medium" weight="bold" color="#000">Size</Text>
                     <Box pad="small"/>
                     <Anchor size="medium" weight="bold" onClick={() => {setDescFit(true)}} color="#000">{descFit == true ? <CaretRightFill width="0" size="small"/> : ""} Description</Anchor>
                     <Anchor size="medium" weight="bold" onClick={() => {setDescFit(false)}} color="#000">{descFit == true ? "" : <CaretRightFill width="0" size="small"/>} How it Fits</Anchor>
                     <Box pad="small"/>
                     <Button secondary color="#000" label="CUSTOM"/>
                     <Button primary color="#000" label="ADD TO BAG"/>
                     <Box pad="small"/>
                     <Text size="small" color="#000">Sustainably Sourced & Handmade Only</Text>
                     <Text size="small" color="#000">- By Lovelly</Text>
                 </Box>
                 <Box direction="column" width="xsmall"/>
                 <Box
                   direction="column"
                   gap="medium"
                   align="start"
                   animation="fadeIn"
                   style={{ position: 'fixed' }}
                   pad={{left:"20%", right: "xsmall"}}
                 >
                     <Text size="medium" color="#000">{product.price} USD</Text>
                     <Text size="medium" color="#000">{product.color}</Text>
                     <Text size="medium" color="#000">{product.size}</Text>
                     <Box pad="small"/>
                     <Text size="medium" color="#000">{desc}</Text>
                 </Box>
            </Box>
            </Grid>
          </Grommet>
      )
}

export default Product;

Product.getInitialProps = ({ query: { id } }) => {
  return { id }
}

// <Form
//   value={value}
//   onChange={nextValue => setValue(nextValue)}
//   onReset={() => setValue({})}
//   onSubmit={({ value }) => {}}
// >
//   <Box direction="row" gap="small">
//       <FormField name="name" htmlFor="text-input-id" label="Name">
//         <TextInput id="text-input-id" name="name" />
//       </FormField>
//       <FormField name="email" htmlFor="text-input-id" label="Email">
//         <TextInput id="text-input-id" name="email" />
//       </FormField>
//   </Box>
//   <Box direction="row" gap="small">
//       <FormField name="itemId" htmlFor="text-input-id" label="Item ID">
//         <TextInput id="text-input-id" name="itemId" />
//       </FormField>
//       <FormField name="color" htmlFor="text-input-id" label="Color">
//         <TextInput id="text-input-id" name="color" />
//       </FormField>
//   </Box>
//   <Box direction="row" gap="small" pad="large">
//       <Text>Size:</Text>
//       <RadioButtonGroup
//          direction="row"
//          name="sizePicker"
//          options={['XS', 'S', 'M', 'L', 'XL']}
//          value={customSize}
//          onChange={(event) => setSize(event.target.value)}
//        />
//   </Box>
//
//   <Box direction="row" gap="medium" align="center">
//     <Button type="submit" primary label="Submit" color="black" />
//     <Button type="reset" label="Reset" color="black"/>
//   </Box>
// </Form>
