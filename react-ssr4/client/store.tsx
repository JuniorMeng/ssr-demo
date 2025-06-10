import { create } from 'zustand';

export default (initialState = {}) => {
  return create((set) => ({
    isLoggedIn: false,
    username: '',
    ...initialState,
    login: (username: any) => set({ isLoggedIn: true, username }),
    logout: () => set({ isLoggedIn: false, username: '' })
  }));
};