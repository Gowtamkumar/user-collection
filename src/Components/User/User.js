import React from 'react';
import './User.css'
const User = (props) => {
   
    const { first_name, last_name, salary, email, img, city, gender, company_name, state, street_address, job_title, country } = props.user;

    const HeandlerAddUser = props.HeandlerAddUser;
    console.log('test', HeandlerAddUser)
    return (
        <div className="userStyle">
            <div className="usersDetails">

                <div className="userAllInfo">
                    <div className="userHeader">
                        <img src={img} alt="" />
                        <h4><span> {first_name} {last_name}</span></h4>
                        <p>
                            <small>Salary: ${salary}</small>
                        </p>
                    </div>
                    <div className="userFooter">
                        <p>
                            <small>Gender: {gender}</small>
                        </p>
                        <p>
                            <small>Email: {email}</small>
                        </p>
                        <p>
                            <small>Job Title: {job_title}</small>
                        </p>
                        <p>
                            <small>Company Name: {company_name}</small>
                        </p>

                        <p><span>Address: {street_address} {city} {state}{country}</span></p>

                        <button onClick={()=> HeandlerAddUser(props.user)}>Add</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default User;