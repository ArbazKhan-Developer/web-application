const userAction = require('../service/userAction');

async function getUser(req, res, next) {
    const queryId = req.params.id
    if (queryId) {
        // geth the user details by ID
        await userAction.getUserById(queryId)
        res.json({
            user: `${queryId}-sam`
        })
    } else{
        res.json({
            users:[

            ]
        })
    }
}

function postUser(req, res, next) {
    const queryId = req.query?.id
    if (queryId) {
        // geth the user details by ID
        res.json({
            user: `${queryId}-sam`
        })
    } else{
        res.json({
            users:[

            ]
        })
    }
}

module.exports = {getUser, postUser}