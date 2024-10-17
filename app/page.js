import { Container, Grid2 } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import mutual from "../styles/images/mutual.png";
import stock from "../styles/images/stock.png";
import equity from "../styles/images/equity.png"
import logo from "../styles/svgs/logo.svg";


const Home = () => {
  return (
    <div>
      <Container maxWidth="sm" className='text-center mt-40'>
        <h1 className='text-5xl mb-10 text-center'>
          {/* <span className='text-green-500 font-extrabold text-3xl'>fin<span className='font-normal'>Minds</span></span><br/> */}

        Discover a World of 
        <span className='text-green-500 font-bold'> Financial Knowledge</span>
        </h1>

        <a href="/learn" className='bg-black px-5 py-3 text-white rounded-full text-xl'>Start Learning</a>
      </Container>

      <Container maxWidth="xl" className='bg-green-600 rounded-md py-10 px-8'>
          <h1 className='text-white text-4xl font-extrabold text-center'>Free Educational Content</h1>
          <Container maxWidth="lg" className='mt-10'>
            <Grid2 container spacing={2}>
              <Grid2 size={2} />
              <Grid2 sm={12} md={4} className="flex flex-col bg-white rounded-sm justify-center items-center py-5 px-8">
                <Image src={mutual} alt="Mutual Funds" width={75} height={75} />              
                <h1 className='mt-2 text-3xl font-bold'>Mutual Funds</h1>
                <p className='text-center'>
                Mutual funds have a rich history, dating back to the 18th century in Europe. The first modern mutual fund was established in the Netherlands in 1774, allowing investors to pool resources for safer investments. In the United States, the first mutual fund was created in 1924, marking the beginning of a growing investment trend.
                </p>
                <a href="/learn/mutual/1" className='bg-green-600 text-white px-4 py-2 rounded-md mt-8'>Read More</a>
              </Grid2>
              <Grid2 sm={12} md={4} className="flex flex-col bg-white rounded-sm justify-center items-center py-5 px-8">
                <Image src={stock} alt="Stock Market" width={75} height={75} />              
                  <h1 className='mt-2 text-3xl font-bold'>Stock Market</h1>
                  <p className='text-center'>
                  The stock market is a platform where shares of publicly traded companies are bought and sold. It serves as a marketplace for investors to purchase ownership stakes in businesses, allowing them to participate in the company’s growth and profits.
                  </p>
                  <a href="/learn/stocks/1" className='bg-green-600 text-white px-4 py-2 rounded-md mt-8'>Read More</a>
              </Grid2>
              <Grid2 size={2} />

            </Grid2>
          </Container>
      </Container>

      <Container maxWidth="xl">

      </Container>
    </div>
  )
}

export default Home;
