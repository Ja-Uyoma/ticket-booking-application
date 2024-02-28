import React from "react";
import { Form } from "react-router-dom";

export default function Login() {
  return (
    <div className="">
      <div className="">
        <h2 className="">Sign in to your account</h2>
      </div>

      <div className="">
        <Form className="" action="#" method="POST">
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
              <div className="">
                <a href="#" className="">
                  Forgot password?
                </a>
              </div>
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
              Sign in
            </button>
          </div>
        </Form>

        <p className="">
          Don&apos;t have an account?{" "}
          <a href="#" className="">
            Create one instead
          </a>
        </p>
      </div>
    </div>
  );
}
