/*
  복잡한 택배 시스템
  1000개의 택배가 1초 간 한번에 배송됨
  택배를 받으면 그 즉시 아래의 작업을 실행한다.

  1. 상품 개봉 (3초 소요)
  2. 상품 검사 (3초 소요)
  3. 상품 사용 (3초 소요)

  이때 택배 회사에는 종업원이 3명 밖에 없기때문에 위 작업은 최대 3명에의해 동시에 실행됨
  즉, 동시에 4개 이상의 작업을 실행할 수 없음

  각 택배들에 대해서 상품 사용까지 종료된 택배들을 10개씩 묶어 공항으로 보낸다.
  */

import {
  tap,
  of,
  delay,
  interval,
  take,
  concatAll,
  from,
  map,
  mergeAll,
  reduce,
  bufferCount,
} from 'rxjs';

function openBox(delivery) {
  return of(delivery).pipe(
    tap((delivery) => console.log(delivery + '를 열었음.')),
  );
}

function checkProduct(delivery) {
  return of(delivery).pipe(
    tap((delivery) => console.log(delivery + '를 검사함.')),
  );
}

function useProduct(delivery) {
  return of(delivery).pipe(
    tap((delivery) => console.log(delivery + '를 사용함.')),
  );
}

function doTask(delivery) {
  const tasks = from([
    openBox(delivery),
    checkProduct(delivery),
    useProduct(delivery),
  ]);

  return tasks.pipe(
    concatAll(),
    reduce((accu, data) => {
      return delivery;
    }),
  );
}

const deliverries = interval(1000).pipe(take(10));

function sendToAirport(tenDeliveries) {}

deliverries
  .pipe(
    map((delivery) => doTask(delivery)),
    mergeAll(3),
    bufferCount(10),
    tap((tenDliveries) => sendToAirport(tenDliveries)),
  )
  .subscribe();
