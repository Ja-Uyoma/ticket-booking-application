import React from "react";
import { Form, redirect } from "react-router-dom";

export async function registerAction({ request }) {
  const data = Object.fromEntries(await request.formData());

  const res = await fetch("/api/v1/register", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
    })
    .catch((err) => console.error(err));

  return redirect("/login");
}

export default function Register() {
  return (
    <div className="">
      <div className="">
        <h2 className="">Create an account</h2>
      </div>

      <div className="">
        <Form className="" action="/register" method="POST">
          <div>
            <label htmlFor="email" className="">
              Email address
            </label>
            <div className="">
              <input id="email" name="email" type="email" autoComplete="email" required className="" />
            </div>
          </div>

          <div>
            <div className="">
              <label htmlFor="password" className="">
                Password
              </label>
            </div>
            <div className="">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className=""
              />
            </div>
          </div>

          <div>
            <button type="submit" className="">
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
