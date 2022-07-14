const baseUrl = "http://localhost:3030/jsonstore/news";

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json());
}

export const getById = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
}

export const editById = (id, post) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json());
}

export const create = (post) => {
    return fetch(`${baseUrl}/${post._id}`)
        .then(res => res.json());
}