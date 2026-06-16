import FormField from "./FormField";

export default function ContactForm() {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // handle the form data...
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        id="name"
        name="name"
        icon="bi-person-vcard-fill"
        type="text"
        placeholder="John Smith"
      />
      <FormField
        label="E-mail"
        id="email"
        name="email"
        icon="bi-mailbox2-flag"
        type="email"
        placeholder="example@email.com"
      />
      <FormField
        label="Phone"
        id="phone"
        name="phone"
        icon="bi-phone-fill"
        type="tel"
        placeholder="(+31) 61235678"
      />
      <FormField
        label="Message"
        id="message"
        name="message"
        icon="bi-chat-square-quote-fill"
        placeholder="Hello, what's on your mind?"
        multiline
      />
      <button
        className="cursor-pointer rounded-2xl bg-chicory p-4 font-semibold text-molasses hover:brightness-90 dark:bg-chicory-dark dark:text-tahini dark:brightness-110"
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}
