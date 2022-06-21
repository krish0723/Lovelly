import type { NextPage } from 'next'
import React, { useState, useContext, useEffect} from 'react';
import { Paragraph, Main, Nav, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import ContactHeaderUnit from '../components/ContactHeaderUnit'
import FooterUnit from '../components/FooterUnit'
import ProductsList from '../components/ProductsList'

const Shop: NextPage = () => {

      // @ts-ignore
    // @ts-ignore
    return (
          <Grommet
              full={true}
              background="#fffced"
              theme={{
                  global: { font: {
                              family: "Alice"
                            }},
                paragraph: {
                    font: {
                      family: 'Arial',
                    }},
                label: {
                    font: {
                      family: 'Arial',
                    }},
              }}
          >
            <ContactHeaderUnit/>
            <ProductsList/>
            <FooterUnit/>
          </Grommet>
      )
}

export default Shop;
