function fibonacciGenerator (n) {
  let arr = [];
  if (n === 1) {arr.push(0)}
  if (n === 2) {arr.push(0,1)}
  if (n >= 3) {
      arr.push(0,1)
      for (let i = 1; i<n-1; i++) {
          let a = arr[i]+arr[i-1]
          arr.push(a)
      }
  }
return arr
}
