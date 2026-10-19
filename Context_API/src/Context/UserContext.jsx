import { createContext } from "react";

// Step 1. Create the Context
export const DataContext = createContext();

const UserContext = ({ children }) => {

    // const {children} = props;
    //console.log(children); // Get children

    const userName = "Faisal";
    
    return (
        <div>
            {/* Step 2. Provide the Context Value */}
            <DataContext.Provider value={userName}>
                {children}
            </DataContext.Provider>
        </div>
    );
};

export default UserContext;