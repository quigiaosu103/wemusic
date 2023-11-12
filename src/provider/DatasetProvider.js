import { createContext, useState } from 'react';

const DataSetContext = createContext();
function DataSetProvider({ children }) {
    const [dataSet, setDataSet] = useState();
    return <DataSetContext.Provider value={[dataSet, setDataSet]}>{children}</DataSetContext.Provider>;
}

export { DataSetProvider, DataSetContext };
