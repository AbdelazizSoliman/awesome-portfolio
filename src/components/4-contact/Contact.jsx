import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import Lottie from 'lottie-react';
import doneAnimation from '../../animation/Animation - 1729125843004.json';
import contactAnimation from '../../animation/contactUs- 1729128279122.json';

export default function Contact() {
  const [state, handleSubmit] = useForm('myzyylzg');

  return (
    <>
      <section className="contact-us">
        <h1 className="title">
          <span className="icon-envelope"> </span>
          Contact us
        </h1>
        <p className="sub-title">
          Contact us for more information and Get notified when I publish something
          new.
        </p>

        <div className="flex justify-content-between">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="ms-4" htmlFor="email">Your Email:</label>
              <input
            // autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex" style={{ marginTop: '24px' }}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="message">Your message:</label>
              <textarea required name="message" id="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            {state.succeeded && (
            <p className="bg-success text-center ms-5 rounded-1  position-relative b-alert alert d-flex">
              <Lottie className="me-2" loop={false} style={{ height: 25 }} animationData={doneAnimation} />

              Yor message has been send successfully👌
            </p>
            )}

            <button type="submit" disabled={state.submitting} className="submit">
              {state.submitting ? 'Submitting ...' : 'Submit'}
            </button>

          </form>

          <div className=" animation contact-animation">
            <Lottie className="ms-2 mb-4 " loop style={{ height: 400 }} animationData={contactAnimation} />
          </div>
        </div>
      </section>
    </>
  );
}
