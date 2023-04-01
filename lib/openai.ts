// lib/openai.ts

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateAssistantResponse(prompt: string): Promise<string> {
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-codex-002', // Choose an appropriate engine for your use case
            prompt: prompt,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.7,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching assistant response:', error);
        return 'Sorry, I am unable to process your request at the moment.';
    }
}
