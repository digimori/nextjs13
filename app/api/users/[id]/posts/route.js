import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({
            creator: params.id // This gets posts from a specific user. Can this be used to display a specific user's page?
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response('Failed to return Prompts from Database', { status: 500 })
    }
}