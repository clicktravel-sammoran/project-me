const checkActivePage = ({ currentPage, parsedPage }) => {
    if (currentPage.includes(parsedPage) || ((currentPage.slice(-1) === "/") && parsedPage === 'home')) return true
}

export default checkActivePage