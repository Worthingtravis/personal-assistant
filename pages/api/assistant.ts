import type { NextApiRequest, NextApiResponse } from 'next';
import { generateAssistantResponse } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { message } = req.body;

    const assistantResponse = await getAssistantResponse(message);

    res.status(200).json({ response: assistantResponse });
}

async function getAssistantResponse(userMessage: string): Promise<string> {
    // Replace this with the actual prompt format for your use case
    const prompt = `User: ${userMessage}\nAssistant:`;

    return await generateAssistantResponse(prompt);
}
