const userAction = require("../dao/userAction");

async function getUser(req, res, next) {
  try {
    const queryId = req.params.id;
    if (queryId) {
      // geth the user details by ID
      const response = await userAction.getUserById(queryId);
      res.send(response);
    } else {
      const response = await userAction.getAllUser();
      res.send(response);
    }
  } catch (error) {
    console.log(`error occurred in get controller: ${error}`);
    throw error;
  }
}

async function postUser(req, res, next) {
  try {
    console.log(`post request received:: ${JSON.stringify(req.body)}`);
    const body = req.body;
    const response = await userAction.createUser(body);
    res.status(201).send(`user ${response.email} created successfully.`);
  } catch (error) {
    console.log(`error occurred while creating user: ${error}`);
    throw error;
  }
}

module.exports = { getUser, postUser };
