
const adminAction = require(`../dao/adminAction`);

async function getAllusers(req, res, next){
    try {
        const response = await adminAction.getAllUser()
        res.send(response)
    } catch (error) {
        console.log(`error occurred: ${error}`);
        throw error;
    }
}

async function deleteUserById(req, res, next) {
    
}

module.exports = {getAllusers};