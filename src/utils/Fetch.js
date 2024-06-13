
const FetchData=async(url,config)=>{
   return new Promise((resolve,reject)=>{
      fetch(url,config)
      .then(res=> res.json())
      .then(data=>resolve(data))
      .catch(error=>reject(error))
   })
}


export {
   FetchData
}