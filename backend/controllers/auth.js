exports.getLogin = (req, res, next) => {
    if (req.session.isLoggedIn) {
        console.log('teste');
    }

    res.render('auth/login', {
        path: '/login'
    });
};

exports.getLogout = (req, res, next) => {
    req.session.isLoggedIn = false;
    res.redirect('/login');
}

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    res.redirect('/');
};

exports.getSignUp = (req, res, next) => {
        res.render('auth/signup', {
        path: '/signup'
    });
};