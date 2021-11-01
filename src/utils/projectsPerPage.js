const projectsPerPage = (projects, resultsPerPage, currentPage) => {
    const projectsPerPage = [];
    for (let i = (currentPage - 1) * resultsPerPage; i < resultsPerPage * currentPage; i++) {
        projectsPerPage.push(projects[i]);
    }
    return projectsPerPage;
}

export default projectsPerPage;