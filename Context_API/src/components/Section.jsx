import React, { useContext } from 'react';
import { DataContext } from '../Context/UserContext';

const Section = () => {
    const data = useContext(DataContext);
    return (
        <div>
            <h1>{data} from Section</h1>
        </div>
    );
};

export default Section;