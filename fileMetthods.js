import fs from "fs";
import { resolve } from "path";

export const get =(file)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file+".json", "utf-8",(err, contenct)=>{
            if(err){
                reject(err);
            }
            resolve(JSON.parse(contenct));
        })
    })
}

export const save = (file, contenct)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(file+".json",JSON.stringify(contenct),(err)=>{
            if(err){
                reject(err)
            }
            resolve()
        })
    })
}