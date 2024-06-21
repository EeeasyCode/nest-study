import { from, interval, merge, take } from 'rxjs';

const stream_A = interval(1000).pipe(take(5));
const stream_B = interval(2000).pipe(take(5));
const stream_C = interval(3000).pipe(take(5));

merge(stream_A, stream_B, stream_C).subscribe({
  next: (data) => {
    console.log(data);
  },
});
import { resolve } from 'path';
import { concat, from, interval, merge, take, timer } from 'rxjs';

// array로 observable 만들기

// const deliveries = ['delivery1', 'delivery2', 'delivery3'];

// // of도 가능함
// const deliveryStream = from(deliveries);

// deliveryStream.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   error: (error) => {
//     console.error(error);
//   },
//   complete: () => {
//     console.log('Completed');
//   },
// });

// function makePromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('delivery');
//     }, 3000);
//   });
// }

// // Promise로 observable 만들기

// const promiseDeliveryStream = from(makePromise());

// promiseDeliveryStream.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   error: (error) => {
//     console.error(error);
//   },
//   complete: () => {
//     console.log('Completed');
//   },
// });

// // 시간 데이터 스트림 핸들링

// // interval -> 1초에 한번씩 이벤트 발생 -> 0부터 1씩 증가
// const stream = interval(1000).pipe(take(4));

// stream.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   error: (error) => {
//     console.error(error);
//   },
//   complete: () => {
//     console.log('Completed');
//   },
// });

// const timer_stream = timer(3000, 1000).pipe(take(4));

// timer_stream.subscribe({
//   next: (data) => {
//     console.log(data);
//   },
//   error: (error) => {
//     console.error(error);
//   },
//   complete: () => {
//     console.log('Completed');
//   },
// });

// const concat_stream_A = from([1, 2, 3, 4, 5]);
// const concat_stream_B = from([6, 7, 8, 9, 10]);

// concat(concat_stream_A, concat_stream_B).subscribe({
//   next: (data) => {
//     console.log(data);
//   },
// });

const concat_stream_C = interval(1000).pipe(take(2));
const concat_stream_D = interval(1000).pipe(take(2));

// concat(concat_stream_C, concat_stream_D).subscribe({
//   next: (data) => {
//     console.log(data);
//   },
// });

merge(concat_stream_C, concat_stream_D).subscribe({
  next: (data) => {
    console.log(data);
  },
});
