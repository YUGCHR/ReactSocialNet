import Axios from "axios";

// DAL - data access layer

export const getUsers = (currentPage = 1, pageSize = 10) => {
return Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, { withCredentials: true });
}

