import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "959808d3-8efe-42bd-88eb-3693675e6c98"
    }
});

export const profileAPI = {

    setUserProfile(userId) {
        return instance.get('profile/' + userId)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },

    updateStatus(status) {
        return instance.put('profile/status', status);
    }
}
