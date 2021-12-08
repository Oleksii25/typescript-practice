

const arr = ["coconut", "banana", "banana", "coconut","coconut", "coconut", "banana",'orange', "banana"];

const func = (arr) => {
  const obj = {}

  for (let n of arr) {
    if(n in obj) {
      obj[n] += 1
    } else {
      obj[n] = 1;
    }
  }

  let ObjArr = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);

  console.log(ObjArr)
  
}

func(arr)