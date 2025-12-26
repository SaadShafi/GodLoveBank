// hooks/useNotificationCount.ts
import { useState, useEffect, useCallback } from 'react';
import { apiHelper } from '../services';

// Global state that all components will share
let globalCount = 0;
const listeners: ((count: number) => void)[] = [];

// Function to update global count and notify all listeners
const setGlobalCount = (count: number) => {
  globalCount = count;
  // Notify all components that are listening
  listeners.forEach(listener => listener(count));
};

export const useNotificationCount = () => {
  const [count, setCount] = useState(globalCount);

  // Subscribe to global count changes when component mounts
  useEffect(() => {
    listeners.push(setCount);
    
    // Cleanup: remove listener when component unmounts
    return () => {
      const index = listeners.indexOf(setCount);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  // Function to fetch fresh count from API
  const refreshCount = useCallback(async () => {
    try {
      const { response } = await apiHelper(
        "GET",
        "/notifications/unread-count",
        {},
        {},
        null
      );
      
      // Extract count from response (adjust based on your API structure)
      const newCount = response?.data?.data?.unreadCount || 
                      response?.data?.unreadCount || 
                      0;
      
      setGlobalCount(newCount);
      return newCount;
    } catch (error) {
      console.log("Error refreshing notification count", error);
      return globalCount;
    }
  }, []);

  // Function to decrease count by 1 (when notification is read)
  const decrementCount = useCallback(() => {
    setGlobalCount(Math.max(0, globalCount - 1));
  }, []);

  // Function to increase count by 1 (optional - for new notifications)
  const incrementCount = useCallback(() => {
    setGlobalCount(globalCount + 1);
  }, []);

  // Function to set specific count
  const setCountDirect = useCallback((newCount: number) => {
    setGlobalCount(newCount);
  }, []);

  return { 
    count, 
    refreshCount, 
    decrementCount, 
    incrementCount,
    setCount: setCountDirect
  };
};