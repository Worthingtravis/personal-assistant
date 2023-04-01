// lib/openai.ts
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateAssistantResponse(prompt: string): Promise<string> {

    console.log('Generating assistant response...');
    console.log(process.env.OPENAI_API_KEY);

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            echo: true,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching assistant response:', error);
        return 'Sorry, I am unable to process your request at the moment.';
    }
}


