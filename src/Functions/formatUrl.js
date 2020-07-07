const formatUrl = ({ url }) => {
    const http = 'http'
    const urlPrefix = 'https://'
    if (!url.includes(http)) {
        const formattedUrl = urlPrefix + url
        return formattedUrl
    } return url
}

export default formatUrl