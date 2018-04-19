module.exports = (req, res, next) => {
    console.log(`Got request at ${ Date.now() }`);
    next();
}