import type { NextPage } from 'next'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import DepopIcon from './icons/depop.svg'
import { Paragraph, Nav, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import {
  Instagram,
  Shop,
  Cart
} from 'grommet-icons';
import Link from 'next/link'

export default function ContactHeaderUnit() {
    
    return (
        <Header background="#fffced" pad="small" gap="xxsmall">
            <Nav direction="row" pad="xxsmall">
              <Box direction="row" width="xxsmall"/>
              <Anchor icon={<Instagram color="#000"/>} hoverIndicator href="https://www.instagram.com/lovelly.jv/" />
              <Anchor icon={<Shop color="#000"/>} hoverIndicator />
            </Nav>
            <Box direction="row" width="xxsmall"/>
            <Box
                direction="column"
                pad="xxsmall"
                align="center"
              >
              <Link href="/" weight="normal" >
                <Text color="#000" href="/home" size="xxlarge">L o v e l l y</Text>
              </Link>
              <Nav direction="row" pad="small">
                <Link href="/shop" weight="normal" hoverIndicator>
                    <Paragraph href="/" color="#000" size="small" hoverIndicator>Shop</Paragraph>
                </Link>
                <Link href="/" weight="normal" hoverIndicator>
                    <Paragraph href="#" color="#000" size="small" hoverIndicator>About</Paragraph>
                </Link>
                <Link href="/contact" weight="normal" hoverIndicator>
                    <Paragraph href="#" color="#000" size="small" hoverIndicator>Contact</Paragraph>
                </Link>
              </Nav>
            </Box>
            <Box direction="row" width="xsmall"/>
            <Nav direction="row" pad="xxsmall">
                <Anchor icon={<Cart color="#000"/>} hoverIndicator />
                <Box direction="row" width="xxsmall"/>
            </Nav>
        </Header>
    );
}
