import Axios from "axios";

// DAL - data access layer

const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "6dd517b6-826d-4942-ab0a-022445b74fcd" },
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
};
