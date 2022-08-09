export const newsAreValid = (title, shortArticle, fullArticle, imageUrl) => {
    let checks = 0;
    let valid = false;

    if (title === "") {
        alert('Title is empty');
    }
    else if (title.length < 5) {
        alert('Title should be atleast 2 words long');
    } else {
        checks += 1;
    }

    if (shortArticle === "") {
        alert('Short version of the article is empty');
    } else if (shortArticle.length >= 125) {
        alert('Short version of the article should be no more than 25 words long');
    } else {
        checks += 1;
    }

    if (fullArticle === "") {
        alert('Article is empty');
    } else if (fullArticle.length >= 600) {
        valid = false;
        alert('The article should be no more than 100 words long');
    } else {
        checks += 1;
    }

    if (imageUrl === "") {
        alert('The url of the image is invalid');
    } else {
        checks += 1;
    }
    if (checks === 4) {
        valid = true;
    }
    return valid;
}

export const registerIsValid = (username, email, password, confirmPassword) => {
    let checks = 0;
    let valid = false;

    if (username === "") {
        alert('Username is invalid');
    }
    else if (username.length < 3) {
        alert('Username should be atleast 3 characters long');
    } else {
        checks += 1;
    }

    if (email === "") {
        alert('Email is invalid');
    } else if (email.length < 15) {
        alert('Email is invalid');
    } else {
        checks += 1;
    }

    if (password === "") {
        alert('Password is invalid');
    } else if (confirmPassword === "") {
        alert('Password confirmation is invalid');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        checks += 1;
    }

    if (checks === 3) {
        valid = true;
    }
    return valid;
}