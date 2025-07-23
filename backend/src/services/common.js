

export const sanitizeUser = (user) =>{

    return {
        id:user.id,
        email:user.email,
        addresses:user.addresses,
        orders:user.orders,
        role:user.role
    }

}

export const cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    // console.log('token in req-cookies-',token)
    // console.log('req.cookies-',req.cookies)
    return token;
};
