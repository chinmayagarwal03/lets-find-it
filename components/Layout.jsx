
import Head from 'next/head'

import Navbar from './Navbar';
import {Box} from '@chakra-ui/react'
import Footer from './Footer';

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <title>Real Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </>
    )
}