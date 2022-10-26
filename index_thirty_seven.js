const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

// When we pass multiple promises to the Promise.race method, 
// it resolves/rejects the first promise that resolves/rejects.
Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
