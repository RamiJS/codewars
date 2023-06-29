function nthFibo(n) {
    let fibo = [0, 1]
    
    for(let i = 0; i <= n; i++){
      fibo.push(fibo[i] + fibo[i+1]) 
    }
    return fibo[n-1]
  }