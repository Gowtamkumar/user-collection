import React from 'react';

const Salary = (props) => {
    console.log("Salary", props.user)
    const salarys = props.user;
    const totalPopulation = salarys.reduce((sum, user) => sum + user.salary, 0)
    return (
        <div>
            <h2>Salary: {totalPopulation}</h2>
        </div>
    );
};

export default Salary;