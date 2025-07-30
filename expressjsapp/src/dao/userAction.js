const userDB = require('../model/dbModel')

async function getUserById(id) {
    try {
        const user = await userDB.find({_id: id})
        console.log('record fetched', user);
        return user
    } catch (error) {
        console.log(`error occuurred while fetching the record:: ${error}`);
        throw error
    }
}

async function getAllUser() {
    try {
        const user = await userDB.find({})
        console.log('record fetched', user);
        return user
    } catch (error) {
        console.log(`error occuurred while fetching all the record:: ${error}`);
        throw error
    }
}

async function createUser(params) {
    try {
        const res = await userDB.create(params);
        console.log(`user created successfully`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(`error occurred while posting user details:: ${error}`);
        throw error;
    }
}

module.exports = {getUserById, createUser, getAllUser}