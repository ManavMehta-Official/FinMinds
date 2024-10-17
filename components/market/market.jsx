import React from 'react';
import { funds } from '@/course/funds';

const Market = () => {
  return (
    <div>
      <h1 className='text-2xl font-extrabold mb-5'>Mutual Fund Market</h1>
          {
            funds.map((fund) => (
              <div className='flex flex-row' key={fund.scheme_code}>
                <a href={`/simulator/${fund.scheme_code}`} className='my-2 px-2 py-2 border border-slate-600/40 hover:bg-slate-300/50 rounded-md w-full justify-start cursor-pointer'>
                  <h1>{fund.scheme_name}</h1>
                </a>
              </div>
            ))
          }
    </div>
  )
}

export default Market;
