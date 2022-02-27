import React from 'react';
/**
 * Custom Hook Local Storage
 * @param {String} itemName name local storage 
 * @param initialValue Type value initial
 * @returns array [item: Lo que guardo, saveItem(): La función para guardarlos]
 */
 function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    return [
      item,
      saveItem,
    ];
  }

  export {useLocalStorage}