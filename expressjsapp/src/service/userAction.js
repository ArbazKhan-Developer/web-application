const userDB = require('../model/userModel')

const param = {
    name: "sam khan",
    email: "kabz86011",
    address: "mumbai"
}

async function getUserById() {
    try {
        const user = await userDB.find({})
        // await userDB.create(param)
        console.log('record getched', user);
        return user
    } catch (error) {
        console.log(`error occuurred while inserting the record:: ${error}`);
        throw error
    }
}

module.exports = {getUserById}