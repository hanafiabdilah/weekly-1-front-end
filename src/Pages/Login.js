import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import PrimaryButton from "../Components/PrimaryButton";
import { Link } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function handleLogin(e) {
        e.preventDefault()

        console.log(`Email : ${email}`)
        console.log(`Password : ${password}`)
    }

    return (
        <AuthLayout>

            <h1 className="font-medium text-2xl">LOGIN</h1>

            <form onSubmit={handleLogin} className="mt-8">
                <div className="space-y-5">
                    <div>
                        <label htmlFor="email">Email</label>
                        <TextInput type="email" id="email" placeholder="email@example.com" className="block w-full" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <TextInput type="password" id="password" className="block w-full" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <PrimaryButton className="w-full">LOGIN</PrimaryButton>

                    <div>
                        Gapunya akun ? <Link to="/register" className="text-blue-500 hover:underline">Daftar Disini</Link>
                    </div>
                </div>
            </form>

        </AuthLayout>
    )
}