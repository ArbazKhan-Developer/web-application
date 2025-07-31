const adminAction = require(`../dao/adminAction`);

async function getAllusers(req, res, next) {
  try {
    const response = await adminAction.getAllUser();
    res.send(response);
  } catch (error) {
    console.log(`error occurred: ${error}`);
    throw error;
  }
}

async function deleteUserById(req, res, next) {
  try {
    const id = req.params.id;
    console.log(`id for delete user:: ${id}`);
    const response = await adminAction.deleteUser(id);
    if (response) {
         res.send(`user ${response.name} deleted successfully`)
    }else{
        res.status(204).send('user not found')
    }
   
  } catch (error) {
    console.log(`error in AdminController when deleting user:: ${error}`);
    throw error;
  }
}


async function deleteAlluser(req, res, next) {
  try {
    const response = await adminAction.deleteAllUser();
    if (response.deletedCount > 0) {
         res.send(`${response.deletedCount} user deleted successfully`)
    }else{
        res.status(204).json({
            message: "no user found to delete"
        })
    }
   
  } catch (error) {
    console.log(`error in AdminController when deleting user:: ${error}`);
    throw error;
  }
}
module.exports = { getAllusers, deleteUserById, deleteAlluser };
