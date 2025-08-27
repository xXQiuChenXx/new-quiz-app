// Utility functions for local storage

/**
 * Save data to local storage
 * @param key - The key to store the data under
 * @param data - The data to store
 */
export const saveToLocalStorage = <T>(key: string, data: T): void => {
  try {
    if (typeof window !== 'undefined') {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

/**
 * Load data from local storage
 * @param key - The key to retrieve data from
 * @param defaultValue - Default value if key doesn't exist
 * @returns The stored data or default value
 */
export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    if (typeof window !== 'undefined') {
      const serializedData = localStorage.getItem(key);
      if ( serializedData === null) {
        return defaultValue;
      }
      return JSON.parse(serializedData) as T;
    }
    return defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

/**
 * Clear data from local storage
 * @param key - The key to clear
 */
export const clearFromLocalStorage = (key: string): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

/**
 * Generate a storage key for a quiz
 * @param quizId - The quiz ID
 * @returns The storage key
 */
export const getQuizStorageKey = (quizId: string): string => {
  return `quiz_progress_${quizId}`;
};