import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import datas from './DataSlice'

export const Store = configureStore({
        reducer : {
            datastore : datas
        }
    
  })
  

// export default Store