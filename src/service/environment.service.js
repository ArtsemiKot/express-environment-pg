const {getAllEnvironmentDB, getEnvironmentByIDDB,createEnvironmentDB, updateEnvironmentDB, deleteEnvironmentDB}= require('../repository/environment.repository')

async function getAllEnvironment(){
const data = await getAllEnvironmentDB();
return data;
}

async function getEnvironmentByID(id){
    const data = await getEnvironmentByIDDB(id);
    return data;
    }

async function createEnvironment(label, category, priority){
        const data = await createEnvironmentDB(label, category, priority);
        if(!data.length) throw new Error('bad')
        return data;
        }  

async function updateEnvironment(id, label, category, priority){
    const data = await updateEnvironmentDB(id, label, category, priority);
    if(!data.length) throw new Error('id is not found');
    return data;
}

async function deleteEnvironment(id){
    const data = await deleteEnvironmentDB(id);
    if(!data.length) throw new Error('id is not found');
    return data;
}

module.exports = {getAllEnvironment, getEnvironmentByID, createEnvironment, updateEnvironment, deleteEnvironment};