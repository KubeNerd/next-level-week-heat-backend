import { prismaClient } from "../prisma";

class GetLast3MessagesService{

    async execute(){

       const messages = await prismaClient.message.findMany({
            take:3,
            orderBy:{
                created_at:"desc",
            },
            include:{
                user:true,
            },

        })

        return messages;
        // try {
        //     const messages = await prismaClient.message.findMany({
        //         take:3,
        //         orderBy:{
        //             created_at:"desc",
        //         },
        //         include:{
        //             user:true,
        //         },
    
        //     })

        //     return messages;
        // } catch (error) {
        //     return error
        // }


    
    }



}

export { GetLast3MessagesService };