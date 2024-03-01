import React from "react";
import { Form, Link, redirect } from "react-router-dom";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  console.log(payload);
  try {
    const res = await fetch("/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log(res);

    if (res.status === 200) {
      return redirect("/events");
    }
  } catch (err) {
    console.error(err);
  }

  return { ok: true };
}

export default function Login() {
  return (
    <div className="form-control flex items-center justify-center h-screen">
      <div>
        <h2 className="">Sign in to your account</h2>
      </div>

      <div className="">
        <Form className="form-control" action="/login" method="POST">
          <label htmlFor="email" className="input input-bordered flex items-center gap-2">
            Email
            {/* */}
            <input name="email" type="text" className="grow" placeholder="user@example.com" required />
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

          <div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </Form>

        <p>
          Don&apos;t have an account?{" "}
          <Link to={`/register`} className="underline">
            Create one instead
          </Link>
        </p>
      </div>
    </div>
  );
}
