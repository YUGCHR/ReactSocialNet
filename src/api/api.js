import Axios from "axios";

// DAL - data access layer

const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "6dd517b6-826d-4942-ab0a-022445b74fcd" },
});

export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 10) => {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  unfollow: async (id) => {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },
  follow: async (id) => {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
  getProfile: (id) => {
    console.warn("Obsolete method. Please use profileAPI.getProfile()");
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
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto: (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile: (profile) => {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  getMe: () => {
    return instance.get(`auth/me/`);
  },
  /* getMe() {
    return instance.get(`auth/me/`);
  }, */
  login: (email, password, rememberMe = false) => {
    return instance.post(`auth/login/`, { email, password, rememberMe });
  },
  logout: () => {
    return instance.delete(`auth/login/`);
  },
};
