import Axios from "axios";

// DAL - data access layer

const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "6dd517b6-826d-4942-ab0a-022445b74fcd" },
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  unfollow: (id) => {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  follow: (id) => {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getProfile: (id) => {
    console.warn("Obsolete method. Please use profileAPI.getProfile()")
    return profileAPI.getProfile(id);
  },
};

export const profileAPI = {
  getProfile: (id) => {
    return instance.get(`profile/` + id);
  },
  getStatus: (id) => {
    return instance.get(`profile/status/` + id);
  },
  updateStatus: (status) => {
  return instance.put(`profile/status`, {status: status});
  },
};

export const authAPI = {
  getMe: () => {
    return instance.get(`auth/me/`);
  },
};
