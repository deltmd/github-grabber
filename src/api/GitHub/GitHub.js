import axios from "axios";

const BASE_URL = "https://api.github.com";

export { getRepos, getUserData, getFollowers, getFollowings };

function getRepos(username) {
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
    return axios.get(url).then(response => response.data);
}

function getUserData(username) {
    return axios
        .all([
            axios.get(`${BASE_URL}/users/${username}`),
            axios.get(`${BASE_URL}/users/${username}/orgs`)
        ])
        .then(([user, orgs]) => ({
            user: user.data,
            orgs: orgs.data
        }));
}

function getFollowers (username) {
    const url = `${BASE_URL}/users/${username}/followers`;
    return axios.get(url).then(response => response.data);
}

function getFollowings (username) {
    const url = `${BASE_URL}/users/${username}/following`;
    return axios.get(url).then(response => response.data);
}
