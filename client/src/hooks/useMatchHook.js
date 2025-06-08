import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useMatchHook = create((set) => ({
  matches: [],
  isLoadingMyMatches: false,
  isLoadingMyUserProfile: false,
  userProfiles: [],
  swipeFeedback: null,

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
  swipeLeft: async (user) => {
    try {
      set({ swipeFeedback: 'passed' });
      await axiosInstance.post('/matches/swipe-left/' + user._id);
    } catch (error) {
      console.log(error);
      toast.error('Failed to swipe left');
    } finally {
      setTimeout(() => set({ swipeFeedback: null }), 1500);
    }
  },
  swipeRight: async (user) => {
    try {
      set({ swipeFeedback: 'liked' });
      await axiosInstance.post('/matches/swipe-right/' + user._id);
    } catch (error) {
      console.log(error);
      toast.error('Failed to swipe right');
    } finally {
      setTimeout(() => set({ swipeFeedback: null }), 1500);
    }
  },
}));
