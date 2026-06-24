import { useEffect, useState } from "react";

const UseEffectComponent = () => {
    // use state hook
    const [count, setCount] = useState(0);

    // use effect hook
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)} className="border">Click {count} times</button>
        </div>
    );
};

export default UseEffectComponent;