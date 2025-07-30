const db = require('../model/dbModel');


async function getAllUser() {
    try {
        const res = await db.find({});
        console.log('received all user');
        return res;
    } catch (error) {
        console.log(`error occurred while getAlluser by admin : ${error}`);
        throw error;
    }
}


module.exports = {getAllUser};