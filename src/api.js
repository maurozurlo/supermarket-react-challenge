//Setting Mock Data for first time access
if(!localStorage.getItem('supermarketList')){
  const list = ['Beer','Coffee','More Beer']
  localStorage.setItem('supermarketList', JSON.stringify(list))
}

export const getAllListItems = () => new Promise(
  function (resolve, reject){
    if(localStorage.getItem('supermarketList')){
      resolve(JSON.parse(localStorage.getItem('supermarketList')))
    }else{
      const errMsg = new Error('No items found')
      reject(errMsg)
    }
  }
)
 

export const addItemToList = (itemName) => new Promise(
  function(resolve, reject){
    let list = JSON.parse(localStorage.getItem('supermarketList'))
    if(itemName !== ''){
      list.push(itemName)
      localStorage.setItem('supermarketList',JSON.stringify(list))
      resolve()
    }else{
      const errMsg = new Error("Can't add null item")
      reject(errMsg)
    }
  }
)

export const deleteItemFromList = (id) => new Promise(
  function(resolve, reject){
    let list = JSON.parse(localStorage.getItem('supermarketList'))
    if(id >= 0 && id <= list.length){
      list.splice(id,1);
      localStorage.setItem('supermarketList',JSON.stringify(list))
      resolve()
    }else{
      const errMsg = new Error("Can't delete item")
      reject(errMsg)
    }
  }
)

export default {
  getAllListItems,
  deleteItemFromList,
  addItemToList
}