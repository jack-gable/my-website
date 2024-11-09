"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import Title from "../Title";
import { ToastContainer, toast } from "react-toastify";

const Contact = ({ theme }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jack",
          from_email: form.email,
          to_email: "jackgable13@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you for your message", {
            position: "bottom-right",
            autoClose: 3000,
            closeOnClick: true,
            theme: theme?.value === "light" ? "light" : "dark",
          });

          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Thank you for your message", {
            position: "bottom-right",
            autoClose: 3000,
            closeOnClick: true,
            theme: theme?.value === "light" ? "light" : "dark",
          });
        }
      );
  };

  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <Title heading="h2" title="Let's Connect" />
          <p className={styles.text}>
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              <span className={styles.labelText}>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={20}
                title="Name must be between 3 and 20 characters long"
                className={styles.input}
                placeholder="John Doe"
                onInvalid={() => setErrorName(true)}
                onInput={() => setErrorName(false)}
              />
            </label>
            {errorName && (
              <p className={styles.error}>
                Name must be between 3 and 20 characters long
              </p>
            )}

            <label className={styles.label}>
              <span className={styles.labelText}>Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                pattern="^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address"
                className={styles.input}
                placeholder="johndoe@gmail.com"
                onInvalid={() => setErrorEmail(true)}
                onInput={() => setErrorEmail(false)}
              />
            </label>
            {errorEmail && (
              <p className={styles.error}>Please enter a valid email address</p>
            )}

            <label className={styles.label}>
              <span className={styles.labelText}>Your message</span>
              <textarea
                style={{ resize: "none" }}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                minLength={8}
                rows={5}
                title="Message must be at least 8 characters long"
                className={styles.input}
                placeholder="Share your thoughts or inquiries..."
                onInvalid={() => setErrorMessage(true)}
                onInput={() => setErrorMessage(false)}
              />
            </label>
            {errorMessage && (
              <p className={styles.error}>
                Message must be at least 8 characters long
              </p>
            )}

            <button className={styles.btn} type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <FiArrowUpRight size={20} />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
