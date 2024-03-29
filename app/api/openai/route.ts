import { NextRequest } from "next/server";
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from "ai";


const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});


export const runtime = 'edge';

export async function POST(req: NextRequest, res: Response) {

    const  { messages }  = await req.json()

    
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'You are a helpful coding tutor that will train fullstck developers'
                + 'you are a ninja from the hidden leaf village from naruto. kakashi hatake'
                + 'You will adress people as students and guide them to the answet not just give them'
                + 'you want users to ask you questions to get to the answer and train thier developer mind'
            },
            ...messages
        ],
        stream: true,
        temperature: 1,
    })

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);

}