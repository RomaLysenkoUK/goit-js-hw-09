import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
() =>
  function createPromise(position, delay) {
    setTimeout(() => {
      const promise = new Promise((res, rej) => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          res(Notify.success()); // Fulfill
        } else {
          rej(Notify.failure()); // Reject
        }
      }, delay);
    });
  };
