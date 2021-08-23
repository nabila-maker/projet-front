import api from './Api';
import React from 'react';

const ChallengeService = {
    getChallenge : async ()=>{
        return await api.get('account/challenges/:iduser')
    },

    addChallenge : async (id,user_id)=>{
        const data={user_id}
        console.log(data)
        return await  api.post(`account/challenges/${id}`,data)
    },

    deleteChallenge: async (id)=>{
        return await api.delete(`account/delete/${id}`)
    },
    updateChallenge: async (id)=>{
        return await api.put(`account/edit/${id}`,{status:"1"})
    },

    validatedChallenge:async()=>{
        return await api.get("account/validatedChallenge")
    }


}



export default ChallengeService;