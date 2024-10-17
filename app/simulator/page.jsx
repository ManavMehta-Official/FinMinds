import { Grid2 } from '@mui/material';
import React from 'react';
import { funds } from '@/course/funds';
import Market from '@/components/market/market';


const Page = () => {
  return (
    <>
      <div className='hidden md:block'>
        <Grid2 container spacing={2} className="border-t border-black">
          <Grid2 size={3} className="border-r border-black py-5 px-10">
            <Market />
          </Grid2>
          <Grid2 size={9}>
              <h1 className='text-center items-center mt-[30%] text-2xl font-bold'>Select a Fund to Analyze</h1>
          </Grid2>
        </Grid2>
      </div>

      <div className='block md:hidden p-2'>
        <div className='mt-5'>
          <Market />
        </div>
      </div>
    </>
  )
}

export default Page;
