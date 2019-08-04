/*
  **@desc 这个文件是对web浏览器的本地存储做一些封装 方便在需要的时候用到
  **@author wcy
*/
export default {
  local: {
    has(key) {
      return localStorage.getItem(key) !== null;
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    },
    get(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
      localStorage.removeItem(key);
      return true;
    },
    clear() {
      localStorage.clear();
      return true;
    }
  },
  session: {
    has(key) {
      return sessionStorage.getItem(key) !== null;
    },
    set(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    },
    get(key) {
      return JSON.parse(sessionStorage.getItem(key));
    },
    remove(key) {
      sessionStorage.removeItem(key);
      return true;
    },
    clear() {
      sessionStorage.clear();
      return true;
    }
  }
};




