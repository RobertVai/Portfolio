import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Contact.module.css";

const schema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters").max(80),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(4, "Message must be at least 4 characters").max(2000),
});

type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

const onSubmit = async (data: FormValues) => {
  const endpoint = "https://formspree.io/f/mqadblpd"; 

  const fd = new FormData();
  fd.append("name", data.name);
  fd.append("email", data.email);
  fd.append("message", data.message);

  const res = await fetch(endpoint, {
    method: "POST",
    body: fd,
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    setSent(true);
    reset();
  } else {
    alert("Sorry, the message was not sent. Try again later.");
  }
};

  return (
    <section className={styles.section} id="contact">
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.kicker}>LET’S</h2>
          <h2 className={styles.kicker}>GET IN</h2>
          <h2 className={styles.kicker}>TOUCH</h2>
           <div className={styles.socials}>
            <Link href="https://www.linkedin.com/in/robert-vaitechovskij/" target="_blank" rel="noopener noreferrer"> <img src="./svg/linkedin.svg" alt="LinkedIn" /></Link>
            <Link href="https://github.com/RobertVai" target="_blank" rel="noopener noreferrer"> <img src="./svg/github.svg" alt="GitHub" /></Link>
        </div>
        </div>

    

        <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>FULL NAME</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className={styles.error} role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>EMAIL</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className={styles.error} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>MESSAGE</label>
            <textarea
              id="message"
              rows={4}
              className={`${styles.input} ${styles.textarea}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" className={styles.error} role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.submit}
              disabled={isSubmitting}
              aria-label="Send message"
            >
              <span className={styles.arrow} aria-hidden>
                →
              </span>
            </button>
            {sent && (
              <span className={styles.success} role="status">
                Thanks! I’ll get back to you soon.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;