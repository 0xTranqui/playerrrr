import { createContext, useContext, useState} from 'react';

const AppContext = createContext(null);

export function AppWrapper({ children }) {
   const [ mintQuantity, setMintQuantity ] = useState({ name: '1', queryValue: '1' });
   const [ currentTrack, setTrackIndex ] = useState(0);
   const [ isPlaying, setIsPlaying ] = useState(false);

   const values = {
      mintQuantity,
      setMintQuantity,
      currentTrack, 
      setTrackIndex,
      isPlaying, 
      setIsPlaying
   }

   return (
      <AppContext.Provider value={values}>
         {children}
      </AppContext.Provider>
   );
}

export function useAppContext() {
   const context = useContext(AppContext);

   if(!context){
   console.error('Error deploying App Context!!!');
   }

   return context;
}

export default useAppContext;