"use client";

import { useState } from "react";
import { site } from "@/data/site";

const empty = { name: "", company: "", email: "", phone: "", spec: "", message: "" };

export default function RfqForm() {
  const [values, setValues] = useState(empty);

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  // The site is static, so there is no server to post to. Submitting opens the
  // visitor's email app with the request filled in, addressed to site.contact.email.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Quote request${values.company ? " - " + values.company : ""}`;
    const body = [
      `Name: ${values.name}`,
      `Company: ${values.company}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.spec && `Size, grade and connection: ${values.spec}`,
      "",
      values.message,
    ]
      .filter((line) => line !== false)
      .join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required value={values.name} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={values.company}
            onChange={update}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required value={values.email} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="hint">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="spec">
          Pipe size, grade and connection <span className="hint">(optional)</span>
        </label>
        <input
          id="spec"
          name="spec"
          type="text"
          placeholder={'For example: 9-5/8" casing, L80 13Cr, premium connection'}
          value={values.spec}
          onChange={update}
        />
      </div>

      <div className="field">
        <label htmlFor="message">What do you need done?</label>
        <textarea id="message" name="message" required value={values.message} onChange={update} />
      </div>

      <div>
        <button type="submit" className="btn btn--primary">
          Send quote request
        </button>
      </div>
      <p className="form__note">This opens your email app with the request ready to send to {site.contact.email}.</p>
    </form>
  );
}
