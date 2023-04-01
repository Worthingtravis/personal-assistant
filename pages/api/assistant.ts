import {connectToDatabase} from "../../interfaces/database";
import {generateAssistantResponse} from "../../lib/openai";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { message } = req.body;

    const assistantResponse = await getAssistantResponse(message);

    res.status(200).json({ response: assistantResponse });
}

async function getAssistantResponse(userMessage: string): Promise<string> {
    const { db } = await connectToDatabase();

    // Search the database for the previous context based on the user's message
    const previousContext = await db.collection('context').findOne({ message: userMessage });

    // Generate the assistant's response based on the previous context and the user's message
    const assistantResponse = await generateAssistantResponse(userMessage);

    // Update the database with the new context for the current message
    await db.collection('context').updateOne(
        { message: userMessage },
        { $set: { context: assistantResponse } },
        { upsert: true },
    );

    return assistantResponse;
}
