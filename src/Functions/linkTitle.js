const linkTitle = ({ url }) => {
    const links = {
        github: "Github repo",
        youtube: "Youtube Demo"
    }
    if (url.includes('github')) {
        return links.github
    }
    else {
        if (url.includes('youtube')) return links.youtube
    }
}

export default linkTitle