// import { MongoClient } from "mongodb";

// async function handler(req,res){
//     console.log(req.body);
//     if(req.method=='POST'){
//         const data=req.body;
        

//        try{
//         const client=await MongoClient.connect('mongodb+srv://Mgikunda:36927683pm@cluster0.tv2bk.mongodb.net/meetups?retryWrites=true&w=majority')
//         const db=client.db();
//         const meetupsCollections=db.collection('meetups');
//         const result=await  meetupsCollections.insertOne(data)
//         console.log(result);
//         client.close();
//        } catch (e){
//         console.log(e);
//        }
      
    
//      res.status(201).json({message:'we are the best'});
//     }

// }


// export default handler;