import type { NextPage } from 'next'
import React, { useState } from 'react';
import { RadioButtonGroup, Form, FormField, TextInput, Paragraph, Main, Nav, Icons, Header, Grommet, Box, Button, Grid, Text, Footer, Anchor } from 'grommet';
import ContactHeaderUnit from '../components/ContactHeaderUnit.tsx'
import FooterUnit from '../components/FooterUnit.tsx'
import OriginUnit from '../components/OriginUnit.tsx'

const Contact: NextPage = () => {
    const [sidebar, setSidebar] = useState(true);
    const [value, setValue] = useState({});
    const [customSize, setSize] = useState({});

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
            <Grid
              rows={['large']}
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
                pad="xlarge"
                align="start"
                animation="fadeIn"
              >
                  <Text color="#000" size="xxlarge">Contact</Text>
                  <Paragraph size="small" color="#000">For all customer and sales inquiries including payment claims and/or exchanges, please contact:</Paragraph>
                  <Paragraph size="small" color="#000">lovellyjv@gmail.com</Paragraph>

             </Box>
             <Box
               gridArea="right"
               background="#fffced"
               direction="column"
               pad="xlarge"
               align="start"
               animation="fadeIn"
             >

                 <Box
                   direction="column"
                   pad="xsmall"
                   align="start"
                   animation="fadeIn"
                 >
                     <Paragraph size="small" color="#000">For Custom Order Inquiries:</Paragraph>
                     <Form
                       value={value}
                       onChange={nextValue => setValue(nextValue)}
                       onReset={() => setValue({})}
                       onSubmit={({ value }) => {}}
                     >
                       <Box direction="row" gap="small">
                           <FormField name="name" htmlFor="text-input-id" label="Name">
                             <TextInput id="text-input-id" name="name" />
                           </FormField>
                           <FormField name="email" htmlFor="text-input-id" label="Email">
                             <TextInput id="text-input-id" name="email" />
                           </FormField>
                       </Box>
                       <Box direction="row" gap="small">
                           <FormField name="itemId" htmlFor="text-input-id" label="Item ID">
                             <TextInput id="text-input-id" name="itemId" />
                           </FormField>
                           <FormField name="color" htmlFor="text-input-id" label="Color">
                             <TextInput id="text-input-id" name="color" />
                           </FormField>
                       </Box>
                       <Box direction="row" gap="small" pad="large">
                           <Text>Size:</Text>
                           <RadioButtonGroup
                              direction="row"
                              name="sizePicker"
                              options={['XS', 'S', 'M', 'L', 'XL']}
                              value={customSize}
                              onChange={(event) => setSize(event.target.value)}
                            />
                       </Box>

                       <Box direction="row" gap="medium" align="center">
                         <Button type="submit" primary label="Submit" color="black" />
                         <Button type="reset" label="Reset" color="black"/>
                       </Box>
                     </Form>
                 </Box>
                 <Box direction="column" height="xsmall"/>
                 <Paragraph size="small" color="#000">Disclaimer: No Refunds, US Shipping Only</Paragraph>
            </Box>
            </Grid>
            <FooterUnit/>
          </Grommet>
      )
}

export default Contact;
