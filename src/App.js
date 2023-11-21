import { useContext } from "react";
import { CountContext } from "./countprovider";


function App() {
    const { count, increment, decrement, reset } = useContext(CountContext);

    return (
        <div>
            <div>Counter: {count}</div>

            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset </button>
            </div>
        </div>
    )

}
export default App;