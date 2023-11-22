function Age(n, k){
  let max = n
  let min = 0
  let center

  // 年齢見つかってないフラグ
  let flg = true

  while (flg){
    // 中央値を算出
    center = min + ((max-min)/2)

    if (k == center ){
      flg = false
    }else if (k < center){
      max = Math.ceil(center)
    }else{
      min = Math.floor(center)
    }
  }
  return center
}
console.log(Age(100, 20))