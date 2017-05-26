
function* index() {
    yield this.render('index', {title: 'react-component'});
}


module.exports = (router) => {
    router.get('/', index)
}