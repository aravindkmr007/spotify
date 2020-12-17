import React,{useContext,createContext,useReducer} from 'react'


export const DatalayerContext = createContext();

 const DataLayer = ( {initialState,reducer,children}) =>
(
    <DatalayerContext.Provider value={useReducer(reducer,initialState)} >
        {children}
    </DatalayerContext.Provider>

)
export default DataLayer
export  const useDataLayerValue = () => 
{
    useContext(DatalayerContext)
}
