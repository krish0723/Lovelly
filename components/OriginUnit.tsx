import type { NextPage } from 'next'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import DepopIcon from './icons/depop.svg'

import { Image, Main, Heading, Paragraph, Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import {
  Instagram,
  Shop,
  Cart
} from 'grommet-icons';


export default function OriginUnit() {

    return (
        <Main pad="medium" direction="row" background="#b4a445" overflow="visible" justify="between" overflow="hidden">
            <Box
                direction="column"
                pad="xlarge"
                align="start"
                animation="fadeIn"
              >
              <Text color="#fff" size="xlarge">Inspired by Fashion</Text>
              <Box direction="column" height="medium"/>
              <Paragraph size="small" color="#fff">Friends Jessica and Monica Vilkhu founded Lovelly in 2022 with a refreshingly directional, sustainable and deeply personal approach to creating clothing.</Paragraph>
              <Paragraph size="small" color="#fff">Each of their collections features compellingly crochet tops and sweaters with hand-made details. With passion, all pieces are locally made from responsibly sourced yarn.</Paragraph>
            </Box>
            <Box
                direction="column"
                pad="xxsmall"
                width="large"
                height="large"
                align="center"
                alignSelf="end"
                margin="none"
                animation="fadeIn"

              >
              <Image
                src="https://lovelly.s3.us-east-2.amazonaws.com/cotton.jpg" fit="cover"
              />
                <Text color="#fff" size="medium">the origin</Text>
            </Box>

        </Main>
    );
}
