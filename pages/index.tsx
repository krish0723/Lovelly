import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import HeaderUnit from '../components/HeaderUnit.tsx'
import FooterUnit from '../components/FooterUnit.tsx'
import OriginUnit from '../components/OriginUnit.tsx'
import ShopUnit from '../components/ShopUnit.tsx'

const Home: NextPage = () => {
    const [sidebar, setSidebar] = useState(true);

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
            <HeaderUnit/>
            <OriginUnit/>
            <ShopUnit/>
            <FooterUnit/>
          </Grommet>
      )
}

export default Home;
