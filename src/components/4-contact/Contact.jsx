import './contact.css';

const Contact = () => (
  <section className="contact-us">
    <h1 className="title">
      <span className="icon-envelope"> </span>
      Contact us
    </h1>
    <p className="sub-title">
      Contact us for more information and Get notified when I publish something
      new.
    </p>

    <div className="flex">
      <form className="">
        <div className="flex">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">Email Address:</label>
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="flex" style={{ marginTop: '24px' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="message">Your message:</label>
          <textarea required name="message" id="message" />
        </div>

        <button type="button" className="submit">
          Submit
        </button>
      </form>

      <div className="border animation">animation</div>
    </div>
  </section>
);

export default Contact;
