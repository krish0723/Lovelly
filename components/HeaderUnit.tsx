import type { NextPage } from 'next'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import DepopIcon from './icons/depop.svg'
import { Paragraph, Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import {
  Instagram,
  Shop,
  Cart
} from 'grommet-icons';
import Link from 'next/link'

export default function HeaderUnit() {

    return (
        <Header background="#b4a445" pad="small" gap="xxsmall" >
            <Nav direction="row" pad="xxsmall">
              <Box direction="row" width="xxsmall"/>
              <Anchor icon={<Instagram color="#fff"/>} hoverIndicator href="https://www.instagram.com/lovelly.jv/"/>
              <Anchor icon={<Shop color="#fff"/>} hoverIndicator />
            </Nav>
            <Box direction="row" width="xxsmall"/>
            <Box
                direction="column"
                pad="xxsmall"
                align="center"
              >
              <Link href="/" weight="normal">
                <Text color="#fff" href="/home" size="xxlarge">L o v e l l y</Text>
              </Link>
              <Nav direction="row" pad="small">
                <Link href="/shop" weight="normal">
                    <Paragraph href="/" color="#fff" size="small" hoverIndicator>Shop</Paragraph>
                </Link>
                <Link href="/" weight="normal">
                    <Paragraph href="#" color="#fff" size="small" hoverIndicator>About</Paragraph>
                </Link>
                <Link href="/contact" weight="normal">
                    <Paragraph href="#" color="#fff" size="small" hoverIndicator>Contact</Paragraph>
                </Link>
              </Nav>
            </Box>
            <Box direction="row" width="xsmall"/>
            <Nav direction="row" pad="xxsmall">
                <Anchor icon={<Cart color="#fff"/>} hoverIndicator />
                <Box direction="row" width="xxsmall"/>
            </Nav>
        </Header>
    );
}
