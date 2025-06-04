import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useMatchHook = create((set) => ({
  matches: [],
  isLoadingMyMatches: false,
  isLoadingMyUserProfile: false,
  userProfiles: [],

  getMyMatches: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get('/matches');
      set({ matches: res.data.matches });
    } catch (error) {
      set({ matches: [] });
      toast.error(error.response.data.message || 'Something went wrong');
    } finally {
      set({ loading: false });
    }
  },
  getUserProfiles: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get('/matches/user-profiles');
      set({ userProfiles: res.data.users });
    } catch (error) {
      set({ userProfiles: [] });
      toast.error(error.response.data.message || 'Something went wrong');
    } finally {
      set({ loading: false });
    }
  },
}));
