const {getAllEnvironmentDB, getEnvironmentByIDDB}= require('../repository/environment.repository')

async function getAllEnvironment(){
const data = await getAllEnvironmentDB();
return data;
}

async function getEnvironmentByID(id){
    const data = await getEnvironmentByIDDB(id);
    return data;
    }

module.exports = {getAllEnvironment, getEnvironmentByID};