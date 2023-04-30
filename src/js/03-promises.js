import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        Notiflix.Notify.success(`Promise ${position} fulfilled in ${delay}ms`);
      } else {
        reject({ position, delay });
        Notiflix.Notify.failure(`Promise ${position} rejected in ${delay}ms`);
      }
    }, delay);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');
  
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);
  
  let currentDelay = delay;
  
  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      
    currentDelay += step;
  }
  
  Notiflix.Report.success('All promises fulfilled', `${amount} promises fulfilled successfully in total`);
});
