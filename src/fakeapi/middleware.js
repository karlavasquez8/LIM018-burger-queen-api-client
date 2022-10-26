// module.exports = (req, res, next) => {
//     const secret = 'esunscreto'
//     if (req.method === "POST" && req.path === "/auth") {
//         if (req.body.email === 'mesera5@gmail.com' &&
//             req.body.password === 'laloca123') {
//             res.jsonp({
//                 token: secret
//             })
//         }
//     } else if (req.headers.authorization === `Bearer ${secret}`) {
//         next()
//     } else {
//         res.sendStatus(401)
//     }
// }