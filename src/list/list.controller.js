const listServices = require("./list.services");

const createToDoEntry = async (req,res) => {
    const {texts, user_id} = req.body;
    try{
        const createdEntry = await listServices.createToDoEntry({texts, user_id});
        return res.status(200).json(createdEntry)
    }catch (e) 
    {
        return res.status(400).json({
            message : 'Something went wrong when creating your entry.'
        })
    }
}

const getList = async (req,res) => {
    const {user_id} = req.query;
    const toDoList = await listServices.getList(user_id);
    if(toDoList.message){
        return res.status(400).json({
            message : toDoList.message
        })
    }
    else{
        return res.status(200).json(toDoList);
    }
}

const deleteToDoList = async (req,res) => {
    const {post_id} = req.params;
    const deletedEntry = await listServices.deleteToDoList({id : post_id});
    if(deletedEntry.status === 400){
        return res.status(400).json({
            message: deletedEntry.message
        })
    }
    else{
        return res.status(200).json({
            message: deletedEntry.message
        })
    }
}

const listControllers = {
    createToDoEntry,
    getList,
    deleteToDoList
};

module.exports = listControllers;