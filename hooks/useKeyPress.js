import { useEffect, useRef } from "react";

const useKeyPress = (targetKey, callback) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // If pressed key is our target key then set to true
  const downHandler = (e) => {
    if (e.key === targetKey) {
      e.preventDefault();
      savedCallback.current();
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

export default useKeyPress;
