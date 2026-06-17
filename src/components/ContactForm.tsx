import { useState } from "react";
import FormField from "./FormField";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<FormValues>;

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = Object.values(errors).some(Boolean);
  const isIncomplete = Object.values(form).some((value) => !value.trim());

  function validate(fields: FormValues) {
    const newErrors: FormErrors = {};

    if (!fields.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!fields.email.trim()) {
      newErrors.email = "E-mail is required.";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!fields.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s\-+()]{10,}$/.test(fields.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!fields.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (fields.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const name = e.target.name as keyof FormValues;
    setForm({ ...form, [name]: e.target.value });

    // Clear this field's error as soon as the user starts correcting it
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const fieldErrors = validate(form);
    const name = e.target.name as keyof FormValues;
    if (fieldErrors[name]) {
      setErrors({ ...errors, [name]: fieldErrors[name] });
    }
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(`Sending:`, form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitted(true);
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      noValidate
    >
      <FormField
        label="Name"
        name="name"
        icon="bi-person-vcard-fill"
        type="text"
        placeholder="John Smith"
        value={form.name}
        error={errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && (
        <p className="text-berry-dark dark:text-berry">{errors.name}</p>
      )}
      <FormField
        label="E-mail"
        name="email"
        icon="bi-mailbox2-flag"
        type="email"
        placeholder="example@email.com"
        value={form.email}
        error={errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && (
        <p className="text-berry-dark dark:text-berry">{errors.email}</p>
      )}
      <FormField
        label="Phone"
        name="phone"
        icon="bi-phone-fill"
        type="tel"
        placeholder="(+31) 61235678"
        value={form.phone}
        error={errors.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.phone && (
        <p className="text-berry-dark dark:text-berry">{errors.phone}</p>
      )}
      <FormField
        label="Message"
        name="message"
        icon="bi-chat-square-quote-fill"
        placeholder="Hello, what's on your mind?"
        value={form.message}
        error={errors.message}
        onChange={handleChange}
        onBlur={handleBlur}
        multiline
      />
      {errors.message && (
        <p className="text-berry-dark dark:text-berry">{errors.message}</p>
      )}
      {!submitted && (
        <button
          className="cursor-pointer rounded-2xl bg-chicory p-4 font-semibold text-molasses hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-chicory-dark dark:text-tahini dark:brightness-110"
          type="submit"
          disabled={hasErrors || isIncomplete}
        >
          Send message
        </button>
      )}
      {submitted && (
        <p className="font-semibold">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      )}
    </form>
  );
}
