const answer = require("../dataBase/model/answerSchema")


const createAnswer = async (req , res) =>{

    try {

        const {...data}= req.body;
        console.log(data);
        if(data){
            const postAnswer = await answer.create(data)
            if(postAnswer){
                res.status(200).json(postAnswer)
            }
        }
        
    } catch (error) {
        console.log(error);
    }

    


}

const getAllAnswer = async (req , res) =>{

    const allAnswer = await answer.find()

    if(allAnswer){
        res.status(200).json(allAnswer)
    }

    
}



module.exports = {createAnswer , getAllAnswer} 