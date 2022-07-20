const baseUrl = "http://localhost:3030/data/news";

export const getAll = () => {
    return fetch(`${baseUrl}`)
        .then(res => res.json());
}

export const getMyNews = (ownerId) => {
    return fetch(`${baseUrl}?sortBy=_ownerId`)
    .then(res => res.json())
}

export const getById = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
}

export const editById = (id, post, accessToken) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json());
}

export const create = (post, accessToken) => {
    return fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json());
}