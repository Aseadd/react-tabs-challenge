import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

export const getTabs = async () => {
  try {
    const response = await api.get(`4/short/headers`);
    const datawithOutHTMLTags = response.data.replace(/<[^>]*>?/gm, '');
    return datawithOutHTMLTags;

  } catch (error) {
    throw error;
  }
};
