
let res = []
a = []
N = 20
for (i=2; i<N; i++) a[i] = true
for (i=2; i<N; i++) {
 if(a[i]){
    for (j=i*2; j<N; j+=i){
        a[j] = false
    }
    res.push(i)
 }
}

console.log(res);
