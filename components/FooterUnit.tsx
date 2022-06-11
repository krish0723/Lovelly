import type { NextPage } from 'next'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import DepopIcon from './icons/depop.svg'
import { Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import {
  Instagram,
  Shop,
  Cart
} from 'grommet-icons';
import Link from 'next/link'
export default function FooterUnit() {

    return (
        <Footer background="#e3dbba" pad="large">
          <Text size="xxlarge">*</Text>
          <Text size="xxlarge">L o v e l l y</Text>
          <Box
              direction="row"
              pad="medium"
            />
          <Box
              direction="row"
              pad="large"
              gap="xlarge"
              align="start"
            >
            <Nav direction="column" pad="medium">
                <Link href="/shop" >
                    <Text color="#000" size="small">Shop</Text>
                </Link>
                <Link href="/" >
                    <Text color="#000" size="small">About</Text>
                </Link>
                <Link href="/contact" >
                    <Text color="#000" size="small">Contact</Text>
                </Link>
            </Nav>

          </Box>
        </Footer>
    );
}
