//=================================
// Verificar Token
//=================================

//* Requires
const jwt = require('jsonwebtoken');




let verificaToken = (req, res, next) => {

    // capturo valor de header personalizado
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token Invalido!!'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

    // console.log(token);

};

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role != 'ADMIN_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es Administrador'
            }
        })
    }


    next();
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
}