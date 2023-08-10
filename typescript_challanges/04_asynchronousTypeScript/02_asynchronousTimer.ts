// Write an asynchronous TypeScript function that implements a timer. 
// The function should take a number `n` as input and wait `n` milliseconds before resolving a promise. 
// The use of JavaScript's `sleep` or `setTimeout` function is not allowed.

const asyncTimer = (n: number): Promise<void> => { 
  return new Promise((resolve)=> { 
    const startTime = Date.now();
    console.log(startTime)
    let currentTime = startTime;

    while (currentTime - startTime < n) { 
      currentTime = Date.now()
    }
    console.log(currentTime)
    
    resolve();
  })
}

// Using the timer:  

const n = 1000;
asyncTimer(n).then(() => { 
  console.log('Timer has finished now!')
})