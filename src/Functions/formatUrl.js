const formatUrl = ({ url }) => {
    const http = 'http'
    const urlPrefix = 'https://'
    if (!url.includes(http)) {
        const formattedUrl = urlPrefix.concat(url)
        return formattedUrl

    } return url
}

export default formatUrl