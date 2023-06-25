// 진입점
import Controller from './Controller.js';
import Store from './Store.js';
import storage from './storage.js';

const main = () => {
  const store = new Store(storage); // 데이터를 담은 스토어(모델) 객체 생성

  const views = {}; // 뷰 생성

  new Controller(store, views); // 스토어+뷰의 컨트롤러 생성
};

document.addEventListener('DOMContentLoaded', main);
