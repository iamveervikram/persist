import { configureStore } from "@reduxjs/toolkit"; 

import textSlice from './text-slice' 

 
 

const store=configureStore({ 

    reducer:{tex:textSlice.reducer} 

}) 

 
 

export default store; 