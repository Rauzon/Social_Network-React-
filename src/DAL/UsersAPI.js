import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "959808d3-8efe-42bd-88eb-3693675e6c98"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    postFollow(id) {
         return instance.post(`follow/${id}`)
    }
}
