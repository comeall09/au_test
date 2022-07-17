import { cities } from "../cities.json"

export const sortData = () => {
  const sortedData = cities.filter(city => Number(city.population) > 50000).sort()
  let max = 0
  let index = 0
  for(let i = 0; i < sortedData.length; i++){    
    let num = Number(sortedData[i].population)    
    if(num > max) {max = num; index = i}
  }
  let newData = []
  newData.push(sortedData[4])
  sortedData.splice(index, 1)
  for(let i = 0; i < sortedData.length; i++){
    newData.push(sortedData[i])
  }
  return newData
}