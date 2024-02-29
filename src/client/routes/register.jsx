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
    <div>
      <div>
        <h2>Create an account</h2>
      </div>

      <Form className="form-control" action="/register" method="POST">
        <label htmlFor="email" className="input input-bordered flex items-center gap-2">
          Email address
          <input id="email" name="email" type="email" autoComplete="email" required className="grow" />
        </label>

        <label htmlFor="password" className="input input-bordered flex items-center gap-2">
          Password
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="grow"
          />
        </label>

        <label htmlFor="passwordConfirmation" className="input input-bordered flex items-center gap-2">
          Password Confirmation
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            autoComplete="current-password"
            required
            className="grow"
          />
        </label>

        <div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
}
