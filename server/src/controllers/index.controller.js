const index = (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to ePets API 🐶!' });
};

module.exports = index;