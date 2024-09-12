/* eslint-disable react/prop-types */
import useScreenSize from '../hooks/useScreenSize'
import { useContext, useEffect, useState } from "react"
import { createContext } from 'react';



const BookmarkContext = createContext();

function BookmarkProvider({ children }) {
    const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize()

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <BookmarkContext.Provider
      value={{
        isMobile
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

function useBookmark() {
  const context = useContext(BookmarkContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { BookmarkProvider, useBookmark };