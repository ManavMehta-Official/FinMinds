"use client"
import { Grid2 } from "@mui/material";
import { useParams } from "next/navigation";
import Courses from "@/components/courses/courses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mutual } from "@/course/mutual";
import ReactMarkdown from 'react-markdown';
import TextToSpeech from "@/components/textToSpeech/textToSpeech";
import { useRef } from "react";
import { useState } from "react";
import axios from 'axios';
import TextFileDownloader from "@/components/textFileDownloader/textFileDownloader";


export default function Page() {
    const params = useParams();
    const id = params.id;
    const textRef = useRef(null);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
      <>
        <div className='border-t border-black hidden md:block'>
            <Grid2 container spacing={1}>
                <Grid2 size={3} className="sticky top-5">
                  <Courses />
                </Grid2>
                <Grid2 size={6} className="border-x border-black px-5 py-10 min-h-screen">
                <TextToSpeech textRef={textRef} />
                    <div ref={textRef}>
                    <h1 className="text-3xl font-extrabold mb-10">{mutual[id-1].title}</h1>
                    {
                        mutual[id-1].body.map((message) => (
                            <>
                                <div key={message.heading}>
                                    <h1 className="text-2xl font-semibold italic font-serif mt-10 mb-2">{message.heading}</h1>
                                    <ReactMarkdown className="font-sans p-2 text-lg whitespace-pre-wrap">{message.text}</ReactMarkdown>
                                </div>
                            </>
                        ))
                    }
                    </div>
                    
                </Grid2>
                <Grid2 size={3} className="px-5 py-10 sticky top-5">
                    <TextFileDownloader />
                </Grid2>
            </Grid2>
        </div>
        <div className="block md:hidden">
          <Grid2 size={12} className="p-2 mt-5 min-h-screen">
                <TextToSpeech textRef={textRef} />
                    <div ref={textRef}>
                    <h1 className="text-3xl font-extrabold mb-10">{mutual[id-1].title}</h1>
                    {
                        mutual[id-1].body.map((message) => (
                            <>
                                <div key={message.heading}>
                                    <h1 className="text-2xl font-semibold italic font-serif mt-10 mb-2">{message.heading}</h1>
                                    <ReactMarkdown className="font-sans p-2 text-lg whitespace-pre-wrap">{message.text}</ReactMarkdown>
                                </div>
                            </>
                        ))
                    }
                    </div>
                    <div className="border-black border-t mt-5">
                      <Courses />
                    </div>
          </Grid2>
        </div>
      </>
    )
}
