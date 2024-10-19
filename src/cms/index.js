import { createClient } from 'contentful';

console.log('THE CLIENT', process.env.REACT_APP_CONTENTFUL_SPACE_ID);


const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID, 
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN, 
});

export default client;
