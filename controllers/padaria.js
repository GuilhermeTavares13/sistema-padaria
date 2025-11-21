exports.getIndex = (req, res, next) => {
    res.render('padaria/index',{
        path: '/'
    });
}

exports.getSignIn = (req, res, next) => {
    res.render('padaria/signin',{
        path: '/signin'
    });
}

exports.getSignUp = (req, res, next) => {
    res.render('padaria/signup',{
        path: '/signup'
    });
}

exports.getCliente = (req, res, next) => {
    res.render('padaria/cliente',{
        path: '/cliente'
    });
}

exports.getProduto = (req, res, next) => {
    res.render('padaria/produto',{
        path: '/produto'
    });
}

