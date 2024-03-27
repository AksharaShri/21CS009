import React, { useState } from 'react';
// import { API_URL } from '../Constant/URL';

function Register() {

    const [companyname, setcompanyname] = useState('');
    const [ownername, setOwnername] = useState('');
    const [rollno, setRollno] = useState('');
    const [owneremail, setOwneremail] = useState('');
    const [accesscode, setAccesscode] = useState('');

    const postdata = async (event) => {
        event.preventDefault();
        console.log("Form submission prevented");
        try {
            const response = await fetch("http://20.244.56.144/test/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    companyname,
                    ownername,
                    rollno,
                    owneremail,
                    accesscode
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData); // Print the response data
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form>
                <label>companyName</label>
                <input value={companyname} onChange={event => setcompanyname(event.target.value)} placeholder='Enter companyName' />

                <label>ownerName</label>
                <input value={ownername} onChange={event => setOwnername(event.target.value)} placeholder='Enter ownerName' />

                <label>rollNo</label>
                <input value={rollno} onChange={event => setRollno(event.target.value)} placeholder='Enter rollNo' />

                <label>ownerEmail</label>
                <input value={owneremail} onChange={event => setOwneremail(event.target.value)} placeholder='Enter ownerEmail' />

                <label>accessCode</label>
                <input value={accesscode} onChange={event => setAccesscode(event.target.value)} placeholder='Enter accessCode' />

                <button onClick={postdata}>Submit</button>
            </form>
        </div>
    );
}

export default Register;