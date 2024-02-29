import React from "react";
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="form-control">
      <div className="">
        <h2 className="">Sign in to your account</h2>
      </div>

      <div className="">
        <Form className="form-control" action="#" method="POST">
          <label htmlFor="email" className="input input-bordered flex items-center gap-2">
            Email
            <input name="email" type="text" className="grow" placeholder="user@example.com" required />
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

          <div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </Form>

        <p>
          Don&apos;t have an account?{" "}
          <Link to={`/register`} className="">
            Create one instead
          </Link>
        </p>
      </div>
    </div>
  );
}
