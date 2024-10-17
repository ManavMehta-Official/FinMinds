"use client"
import { Grid2 } from "@mui/material";
import { useParams } from "next/navigation";
import Courses from "@/components/courses/courses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { equity } from "@/course/equity";
import ReactMarkdown from 'react-markdown';



export default function Page() {
    const params = useParams();
    const id = params.id;
    return (
        <div className='border-t border-black'>
            <Grid2 container spacing={1}>
                <Grid2 size={3} className="sticky top-5">
                <div className='py-5 px-4 sticky top-5'>
                <Tabs defaultValue="learn">
                    <TabsList className="w-full bg-green-500">
                        <TabsTrigger value="learn" className="w-full">Learn</TabsTrigger>
                        <TabsTrigger value="tools" className="w-full">Tools</TabsTrigger>
                    </TabsList>
                    <TabsContent value="learn">
                        <Courses />
                    </TabsContent>
                    <TabsContent value="tools">Change your password here.</TabsContent>
                </Tabs>

                    <div className='flex flex-col mt-4 gap-2'>
                    </div>
                </div>
                </Grid2>
                <Grid2 size={6} className="border-x border-black px-5 py-10 min-h-screen">
                    <h1 className="text-3xl font-extrabold mb-10">{equity[id-1].title}</h1>
                    {
                        equity[id-1].body.map((message) => (
                            <div key={message.heading}>
                                <h1 className="text-2xl font-semibold italic font-serif mt-10 mb-2">{message.heading}</h1>
                                <ReactMarkdown className="font-sans p-2 text-lg whitespace-pre-wrap">{message.text}</ReactMarkdown>
                            </div>
                        ))
                    }
                </Grid2>
                <Grid2 size={3} className=" px-5 py-10 sticky top-5">
                    <div className='py-5 px-4 sticky top-5'>
                        <h1 className='text-3xl font-bold'>Topics</h1>
                        <div className='flex flex-col mt-4 gap-2'>
                        <Courses />
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    )
}
