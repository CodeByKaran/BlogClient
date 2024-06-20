
const FetchData=async(url,config)=>{
   return new Promise((resolve,reject)=>{
      fetch(url,config)
      .then(res=> res.json())
      .then(data=>{
         if(data.code==200)
          resolve(data)
         else
          reject(data.message)
      })
      .catch(error=>reject(error))
   })
}


export {
   FetchData
}