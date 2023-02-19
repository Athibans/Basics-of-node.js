const fs=require('fs');
const read=(filename)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{ if(err){
            reject("not read");}
            resolve(data);
        })
    })
}



///to write in file using promises 

 const write=(filename,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,data,(err)=>{
            if(err){
                reject("not writtem")
            }
            resolve("writeen sucess");
        })
    })
}


const fileoperation=async()=>{
    try{
        console.log("exed");
        const breed =await read(`${__dirname}/pet.txt`);
        console.log("adbs");
        const ds=await write(`${__dirname}/pet1.txt`,breed.toString());
        console.log(ds);
    }catch(err){
        console.log(err);
    }
}
fileoperation();