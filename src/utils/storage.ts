export const getStorageItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return console.warn('key값이 존재하지 않습니다.');
  }
};

export const setStorageItem = (key: string, value: unknown) => {
  try {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    }

    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    clearAllStorage();
    console.warn(e);
  }
};

export const clearAllStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.warn(error);
  }
};

export const clearStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(error);
  }
};
