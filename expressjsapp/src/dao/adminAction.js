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

async function deleteUser(id){
    try {
        const user = await db.findByIdAndDelete(id)
        console.log(user);
        console.log(`user deleted successfully.`);
        return user;
    } catch (error) {
        console.log(`error occurred while deleting user: ${error}`);
        throw error;
    }
}

async function deleteAllUser() {
    try {
        const res = await db.deleteMany()
        console.log(res);
        console.log("all users deleted successfully.");
        return res
    } catch (error) {
        console.log(`error occurred while deleting all users: ${error}`);
        throw error;
    }
}


module.exports = {getAllUser, deleteUser, deleteAllUser};