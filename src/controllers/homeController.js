const path = require('path');

class HomeController {
    index(req, res) {
        res.render('index');
    }
}

const homeController = new HomeController();

module.exports = homeController;