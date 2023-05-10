import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import PrimaryButton from "../Components/PrimaryButton";
import { Link } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";

export default function Register() {
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    function handleRegister(e) {
        e.preventDefault()

        console.log(`Email : ${email}`)
        console.log(`username : ${username}`)
        console.log(`Password : ${password}`)
        console.log(`firstName : ${firstName}`)
        console.log(`lastName : ${lastName}`)
    }

    return (
        <AuthLayout >
            <h1 className="font-medium text-2xl">REGISTER</h1>

            <form onSubmit={handleRegister} className="mt-8">
                <div className="space-y-5">
                    <div>
                        <label htmlFor="email">Email</label>
                        <TextInput type="email" id="email" placeholder="email@example.com" className="block w-full" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <TextInput type="text" id="username" className="block w-full" onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <TextInput type="password" id="password" className="block w-full" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <TextInput type="text" id="firstName" className="block w-full" onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <TextInput type="text" id="lastName" className="block w-full" onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <PrimaryButton className="w-full">REGISTER</PrimaryButton>

                    <div>
                        Punya akun? <Link to="/login" className="text-blue-500 hover:underline">Login Disini</Link>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}