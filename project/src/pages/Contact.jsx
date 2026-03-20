function Contact() {
  return (
    <>
      <section className="contact">
        <h1 className="section-title">Get in Touch</h1>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea placeholder="Your message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135078819!3d-6.194741395493748"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </>
  )
}

export default Contact
