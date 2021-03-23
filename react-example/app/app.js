import React, { useState, useEffect } from 'react';
import Todos from '@pages/Todos';
import Footer from '@pages/Footer';
import AddTodo from '@pages/AddTodo';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="view">
            <AddTodo />
            <Todos />
            <Footer />
        </div>
    );
}

export default App;
