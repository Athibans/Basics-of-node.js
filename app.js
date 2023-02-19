const fs =require('fs');

////to read the text file

fs.readFile(`${__dirname}/pet.txt`,(err,data)=>{
    if(err){
        console.log(err);
    console.log("error happened🔥⛄🔥");
    return;}
    console.log(data.toString());
})

///to write the text file

fs.writeFile(`${__dirname}/pet.txt`,'boxer',(err)=>{
    if(err)
    {
        console.log("error ");
        return;
    }
    console.log("saved sucess");
})

///to delete the exixiting file

fs.unlink(`${__dirname}/pet1.txt`,(err)=>{
    if(err){
        console.log("eerror");
        console.log(err);
        return;
    }
    console.log("deleted sucessfully");
})

//to rename the exisiting 

fs.rename(`${__dirname}/newfile.txt`,`${__dirname}/dog.txt`,(err)=>{
    if(err){
        console.log("erroe");
    }
    console.log("renamed sucessfully");
})


///to create an new file 


fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });

