import React from 'react';
import Todos from "./Todos";
import LoginForm from "./LoginForm";
import Contacts from "./Contacts";
import Figure from "./Figure";
import Counter from "./Counter";

const App = () => {
    return (
        <div>
            <LoginForm />
            <Contacts />
            <Figure />
            <Counter />
            <Todos />
        </div>
    );
};

export default App;
