import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";

export async function loader({ params }) {
  const res = await fetch(`/api/v1/events/${params.eventID}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const event = await res.json();
  return event;
}

export async function action({ params, request }) {
  const formData = await request.formData();
  const eventID = params.eventID;
  console.log(eventID);
  const payload = Object.fromEntries(formData);

  try {
    const res = await fetch(`/api/v1/events/${eventID}/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      return redirect("/events");
    }
  } catch (err) {
    console.error(err);
  }

  return { ok: true };
}

export default function Event() {
  const event = useLoaderData();

  return (
    <div className="card w-96 bg-base-100 shadow-xl" key={event.id}>
      <div className="card-body">
        <h2 className="card-title">{event.name}</h2>
        <p>{event.description}</p>
        <p>Venue: {event.venue}</p>
        <p>Date: {new Date(event.date).toLocaleString()}</p>
        <p>
          Ticket: {event.ticketType}, KES {event.ticketPrice}{" "}
        </p>
        <div className="card-actions justify-between">
          <Form action="" method="post" className="form-control">
            <button name="intent" value="bookEvent" className="btn btn-primary">
              Book Event
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
