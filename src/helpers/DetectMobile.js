const detect = () => {
    const userAgent = window.navigator.userAgent;
    return /Mobi|Android/i.test(userAgent);
}

export default detect;