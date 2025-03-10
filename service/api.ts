import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserData = async (username: string) => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      api.get(`/users/${username}`),
      api.get(`/users/${username}/repos`),
    ]);
    return {
      profile: userResponse.data,
      repos: reposResponse.data,
    };
  } catch (error) {
    console.error("Erro ao buscar dados do GitHub:", error);
    return null;
  }
};

export const searchUsers = async (query: string) => {
  try {
    const response = await api.get(`/search/users?q=${query}`);
    return response.data.items.slice(0, 1);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
};