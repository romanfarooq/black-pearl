import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center pl-10 h-screen">
      <div>
        <h1 className="text-3xl font-bold">Counter</h1>
        <h2 className="text-2xl">Count: {count}</h2>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
