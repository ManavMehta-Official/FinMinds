import React, { useState } from 'react';
import { DownloadIcon, TrashIcon } from '@radix-ui/react-icons';

const TextFileDownloader = () => {
  const [inputText, setInputText] = useState('');

  const handleDownload = () => {
    const blob = new Blob([inputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'notes.txt'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Free up memory
  };

  const handleClear = () => {
    setInputText(''); // Clear the text area
  };

  return (
    <div className='sticky top-5'>
      <h1 className='text-2xl font-extrabold text-center mb-5'>Write your Notes here</h1>
      
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={20}
        className='w-full border border-black mb-5 rounded-md p-2'
      />
        <div className='flex flex-row justify-center items-center gap-5'>
        <button className='bg-green-600 text-white py-1 px-3 rounded-md flex flex-row items-center gap-2' onClick={handleDownload}><DownloadIcon /> Download</button>
        <button className='bg-red-600 text-white py-1 px-3 rounded-md flex flex-row items-center gap-2' onClick={handleClear}><TrashIcon /> Delete</button>
      </div>
      
    </div>
  );
};

export default TextFileDownloader;
