import type { NextPage } from 'next'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import DepopIcon from './icons/depop.svg'
import Link from 'next/link'

import { Stack, Image, Main, Heading, Paragraph, Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import {
  Instagram,
  Shop,
  Cart
} from 'grommet-icons';


export default function ShopUnit() {

    return (
        <Stack>
        <video
            autoPlay
            loop
            muted
            style={{
                width: '100%',
                height: '100%'
            }}>
            <source src="/mars.mp4" />
          </video>
        <Main pad="medium" direction="row" background="#fffced" overflow="visible" height="xsmall" justify="between">
            <Box
                direction="column"
                pad="large"
                align="start"
                animation="fadeIn"
              >
              <Text color="#000" size="xlarge">Effortless pieces, Timeless style, Essential luxury</Text>
              <Box direction="column" height="xsmall"/>
              <Paragraph size="small" color="#000">We design each of our collections with the intention of creating pieces that can be passed down through generations, with minimal waste and minimal carbon footprint.</Paragraph>
              <Box direction="column" height="xsmall"/>
              <Link href="/shop" >
                    <Button secondary color="#000" label="Shop Now" />
              </Link>

            </Box>
        </Main>
        </Stack>
    );
}
