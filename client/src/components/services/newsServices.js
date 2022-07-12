const baseUrl = "http://localhost:3030/jsonstore/news";

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json());
}