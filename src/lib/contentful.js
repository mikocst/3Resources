import pkg from 'contentful';
import dotenv from 'dotenv';

dotenv.config();
const { createClient } = pkg;

console.log("Space ID:", process.env.CONTENTFUL_SPACE_ID);
console.log("Access Token:", process.env.CONTENTFUL_ACCESS_TOKEN);

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchResources() {
    const entries = await client.getEntries({ content_type: 'resource' });
    return entries.items.map((entry) => {
        const image = entry.fields.profile?.fields?.file?.url || 'https://via.placeholder.com/150'; // Access the URL safely
        return {
            id: entry.sys.id,
            title: entry.fields.resourceName,
            tag: entry.fields.tagline,
            description: entry.fields.description,
            image: image, // Pass the URL string
        };
    });
}