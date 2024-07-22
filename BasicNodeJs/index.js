const fs = require('fs');
const os = require('os');

//Create a new File => Part 02
try {
   fs.writeFileSync('input.txt','This is first File');
   console.log(`File Created Successfully !!`); 
} catch (error) {
  console.log(`Error Happen While Creating new File`);  
}

//Read This File => Part 03

const fileData = fs.readFileSync('input.txt','utf-8')
console.log(`Files Data is : ${fileData}`);

//Addition More thing in same file => Part 04

// fs.appendFile("input.txt" , "--ami bhat khabo" , 'UTF8' , function(err){
//     if(err){
//         console.log("Error Happen When Writing : " , err);
//     }else{
//         console.log("Write Data Sucessfully");
//     }
// })

//Delete File => Part 05

// fs.unlink('input.txt',function(err){
//     if(err)console.log("Error while deleting");
//     else console.log("Delete File Sucessfully");
// })

//Part 06
console.log(`Os is : ${os.type()}`);
//part 06
console.log(`Os Release Date is; ${os.release()}`);




