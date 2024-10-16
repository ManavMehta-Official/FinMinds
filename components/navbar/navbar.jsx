import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-row m-2'>
        <div className='w-1/3'>
            <h1>FinMinds</h1>
        </div>
        <div className='w-1/3 flex justify-center gap-4'>
            <button>Home</button>
            <button>Learn</button>
            <button>Invest</button>
            <button>Help</button>
        </div>
        <div className='w-1/3 flex justify-end'>
            <button>
                Login
            </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
