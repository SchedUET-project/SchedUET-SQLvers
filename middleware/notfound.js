const notFound = (req, res, next) => {
    res.status(404).send({ message: "Page not found" });
}

export default notFound