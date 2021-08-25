import React, { useState } from 'react'
import Layout from '../../layout/layout';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [list, setList] = useState([]);

    console.log("list", list);

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = { name, email, mobile };

        setList(list.push(user));
        setName("");
        setEmail("");
        setMobile("");
    };


    const listing = list.map((user) => (
        <li>
            {user.name}
            {user.email}
            {user.mobile}
        </li>
    )
    )


    return (
        <Layout>
            <h1>Contact</h1>
            This is contact page

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" onChange={(event) => setName(event.target.value)} value={name} />
                <input type="email" placeholder="enter email" onChange={(event) => setEmail(event.target.value)} value={email} />
                <input type="number" placeholder="enter number" onChange={(event) => setMobile(event.target.value)} value={mobile} />
                <button type="submit">Submit</button>

            </form>

            {
                list.length &&
                <ul>
                    {listing}
                </ul> ||
                <h2>No Users data</h2>
            }


            {/* {
                list.length ?
                    (<ul>
                        {listing}
                    </ul>) :
                    <h2>No users data</h2>
            } */}
        </Layout>
    )
}

export default Contact
