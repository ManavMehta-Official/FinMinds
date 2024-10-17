"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { funds } from '@/course/funds';
import {
    LineChart,
    PieChart,
    Pie,
    Line,
    XAxis,
    YAxis,
    Cell,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import { Grid2 } from '@mui/material';
import Market from '@/components/market/market';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const NavChart = ({ data }) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#5bb450" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  const SectorChart = ({ data }) => {
    return (
    <PieChart width={300} height={300}>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  }


const page = () => {
    const params = useParams();
    const id = params.id-1;

  return (
    <>
      <div className='hidden md:block'>
        <Grid2 container spacing={2} className="border-t border-black">
          <Grid2 size={3} className="border-r border-black py-5 px-10">
              <Market />
          </Grid2>
          <Grid2 size={9} className="py-4 px-8">
              <h1 className='text-3xl font-extrabold mb-5'>{funds[id].scheme_name}</h1>

              <Tabs defaultValue="weekly" className="w-full">
                  <TabsList className="bg-green-600 mb-5">
                      <TabsTrigger value="weekly">Weekly</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="weekly"><NavChart data={funds[id].nav.weekly} /></TabsContent>
                  <TabsContent value="monthly"><NavChart data={ funds[id].nav.monthly } /></TabsContent>
                  <TabsContent value="yearly"><NavChart data={ funds[id].nav.yearly } /></TabsContent>
              </Tabs>

              <h1 className='text-2xl font-extrabold mt-2'>Fund Analysis</h1>
              <Grid2 container spacing={2}>
                <Grid2 size={6}>
                  <SectorChart data={funds[id].sectors} />
                </Grid2>
                <Grid2 size={6}>
                  <h1 className='text-lg'><span className='font-bold'>Risk: </span>
                    {
                      funds[id].risk == 'Moderate' ? (<span className='bg-yellow-400 text-sm rounded-full px-2 py-1'>Moderate</span>) : (<span className='bg-red-300 text-sm rounded-full px-2 py-1'>High</span>)
                    }
                  </h1>
                  <h1 className='text-lg'><span className='font-bold'>Scheme Name: </span> {funds[id].scheme_name}</h1>
                  <h1 className='text-lg'><span className='font-bold'>Fund House: </span> {funds[id].fund_house}</h1>
                  <h1 className='text-lg'><span className='font-bold'>Category: </span> {funds[id].category}</h1>
                  <br />
                  <h1 className='text-lg'><span className='font-bold'>1 Year Return: </span> {funds[id].one_year_return}%</h1>
                  <h1 className='text-lg'><span className='font-bold'>3 Year Return: </span> {funds[id].three_year_return}%</h1>
                  <h1 className='text-lg'><span className='font-bold'>5 Year Return: </span> {funds[id].five_year_return}%</h1>
                  <h1 className='text-lg'><span className='font-bold'>Expense Ratio: </span> {funds[id].expense_ratio}</h1>
                  
                </Grid2>
              </Grid2>

          </Grid2>
        </Grid2>
      </div>

      <div className='block md:hidden'>
      <Grid2 size={12} className="p-2">
              <h1 className='mt-5 text-3xl font-extrabold mb-5'>{funds[id].scheme_name}</h1>

              <Tabs defaultValue="weekly" className="w-full">
                  <TabsList className="bg-green-600 mb-5">
                      <TabsTrigger value="weekly">Weekly</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="weekly"><NavChart data={funds[id].nav.weekly} /></TabsContent>
                  <TabsContent value="monthly"><NavChart data={ funds[id].nav.monthly } /></TabsContent>
                  <TabsContent value="yearly"><NavChart data={ funds[id].nav.yearly } /></TabsContent>
              </Tabs>

              <h1 className='text-2xl font-extrabold mt-2'>Fund Analysis</h1>
              <Grid2 container spacing={2}>
                <Grid2 size={12}>
                  <SectorChart data={funds[id].sectors} />
                </Grid2>
                <Grid2 size={12}>
                  <h1 className='text-lg'><span className='font-bold'>Risk: </span>
                    {
                      funds[id].risk == 'Moderate' ? (<span className='bg-yellow-400 text-sm rounded-full px-2 py-1'>Moderate</span>) : (<span className='bg-red-300 text-sm rounded-full px-2 py-1'>High</span>)
                    }
                  </h1>
                  <h1 className='text-lg'><span className='font-bold'>Scheme Name: </span> {funds[id].scheme_name}</h1>
                  <h1 className='text-lg'><span className='font-bold'>Fund House: </span> {funds[id].fund_house}</h1>
                  <h1 className='text-lg'><span className='font-bold'>Category: </span> {funds[id].category}</h1>
                  <br />
                  <h1 className='text-lg'><span className='font-bold'>1 Year Return: </span> {funds[id].one_year_return}</h1>
                  <h1 className='text-lg'><span className='font-bold'>3 Year Return: </span> {funds[id].three_year_return}</h1>
                  <h1 className='text-lg'><span className='font-bold'>5 Year Return: </span> {funds[id].five_year_return}</h1>
                  <h1 className='text-lg'><span className='font-bold'>Expense Ratio: </span> {funds[id].expense_ratio}</h1>
                  
                </Grid2>
              </Grid2>

          </Grid2>

          <div className='mt-5 py-5 border-t border-black'>
            <Market />
          </div>
      </div>
    </>
  )
}

export default page
