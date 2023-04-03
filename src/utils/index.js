import {createClient} from 'contentful';

export const imageUrlBuilder = (url) => `https:${url}`;

const client = createClient({
    accessToken: "",
    space: ""
});

// Retrieve the list of blog posts from Contentful
export const getPresentations = async () => {
    const response = await client.getEntries({
        content_type: 'presentation',
    });

    return response.items;
};

// Retrieve Image from Contentful
export const getImage = async (id) => {
    return await client.getAsset(id);
}

export const getEntry = async (id) => {
    return client.getEntries({sys: {id}}).then((entries) => {
        return entries.items.find((entry) => entry.sys.id === id);
    })
}

export const setEntry = async (data) => {
    return await client.createEntryWithId('presentation', data);
}