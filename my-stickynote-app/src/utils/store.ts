class Store {
    static getItem(key: string) {
      return localStorage.getItem(key);
    }
  
    static setItem(key: string, value: string) {
      localStorage.setItem(key, value);
    }
  
    static clearItem(){
        localStorage.clear();
    }
  }
  
  
  export default Store;