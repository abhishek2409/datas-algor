class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const hashKey = this._hash(key);
    const data = [key, value]
    if (!this.data[hashKey]) {
      this.data[hashKey] = [];
    }
    this.data[hashKey].push(data)
    return this.data
  }
  get(key) {
    const hashKey = this._hash(key);
    const obj = this.data[hashKey]
    if(obj){
      for (let i = 0; i < obj.length; i++) {   
        if(obj[i][0] === key){
          return obj[i][1]
        }     
      }
    }
    return undefined
  }
  keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }     
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples');


function firstRecurringCharacter(input){
  if(!input.length) return ""
  let containerObj = {}
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if(containerObj[element] !== undefined) return element
    else containerObj[element] = true
  }
  return undefined
}

// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,3,4,5]));
