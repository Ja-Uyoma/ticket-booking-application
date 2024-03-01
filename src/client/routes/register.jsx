import React from "react";
import { Form, redirect } from "react-router-dom";

export async function registerAction({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  console.log(payload);
  try {
    const res = await fetch("/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log(res);

    if (res.status === 200) {
      return redirect("/login");
    }
  } catch (err) {
    console.error(err);
  }

  return { ok: true };
}

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg font-bold">Create an account</h2>

      <Form className="form-control" action="/register" method="POST">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="input input-bordered flex items-center gap-2">
            Email address
            {/* */}
            <input id="email" name="email" type="email" autoComplete="email" required className="grow" />
          </label>

          <label htmlFor="password" className="input input-bordered flex items-center gap-2">
            Password
            {/* */}
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
            {/* */}
            <input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              autoComplete="current-password"
              required
              className="grow"
            />
          </label>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
}
