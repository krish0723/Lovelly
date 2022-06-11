import type { NextPage } from 'next'
import React, { useState, useContext, useEffect} from 'react';
import { Paragraph, Main, Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import ContactHeaderUnit from '../components/ContactHeaderUnit.tsx'
import FooterUnit from '../components/FooterUnit.tsx'
import ProductsList from '../components/ProductsList.tsx'

const Shop: NextPage = () => {
    
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
            <ProductsList/>
            <FooterUnit/>
          </Grommet>
      )
}

export default Shop;
