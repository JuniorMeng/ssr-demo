import { create } from 'zustand';

export default (initialState = {}) => {
  return create((set) => ({
    // isLoggedIn: false,
    userInfo: {},
    ...initialState,
    // login: (username: any) => set({ isLoggedIn: true, username }),
    // logout: () => set({ isLoggedIn: false, username: '' })
    getUserInfo: async () => {
      const res = await fetch('http://localhost:4005/api/getUserInfo');
      const userInfo = await res.json();
      console.log('store userInfo', userInfo)
      set({ userInfo });
    }
  }));
};


// export default create((set) => ({
//   isLoggedIn: false,
//   username: '',
//   login: (username: any) => set({ isLoggedIn: true, username }),
//   logout: () => set({ isLoggedIn: false, username: '' })
// }));