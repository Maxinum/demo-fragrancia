import React from 'react';
import Skeleton from './components/Skeleton';
const ExpenseModule = () => {
    const fetch = false;
    return (
        fetch ? (
            <div>test</div>
        ) : (
            <Skeleton />
        )
    );
}

export default ExpenseModule;
