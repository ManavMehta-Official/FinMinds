import Courses from '@/components/courses/courses'
import { Grid2 } from '@mui/material'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react';
import { RocketIcon } from '@radix-ui/react-icons';


const page = () => {
  return (
    <>
      <div className='border-t border-black hidden md:block'>
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <Courses />
          </Grid2>
          <Grid2 size={8.5} className="border-l border-black min-h-[100vh] p-20 ">
            <h1 className='text-3xl font-bold text-center mt-[20%]'>Select a Topic to</h1>
            <h1 className='text-3xl font-bold text-center'>Start Your Financial Journey</h1>
          </Grid2>
        </Grid2>
      </div>
      <div className='block md:hidden'>
        <Courses />
      </div>
    </>
  )
}

export default page
