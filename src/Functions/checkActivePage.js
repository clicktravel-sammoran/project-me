const checkActivePage = ({ parsedPage }) => {
    const pathName = window.location.pathname
    if (pathName.includes(parsedPage) || ((pathName === "/") && parsedPage === 'home')) return true
}

export default checkActivePage