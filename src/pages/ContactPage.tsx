import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <h2 className="mb-4 text-center text-4xl font-bold md:text-6xl">
        Contact
      </h2>
      <div className="flex flex-col gap-4 px-4 md:grid md:grid-cols-2 md:p-16">
        <div className="md:col-start-1">
          <h3 className="py-4 text-4xl font-medium">Let's chat!</h3>
          <p className="py-4 text-2xl">
            Have a question, some feedback, or just wanna say hello? I'd love to
            hear from you! Fill out the form and maybe some day it will actually
            do something.
          </p>
          <p className="py-4 text-2xl">
            Currently the form does nothing since I don't know how to have it
            send anything to my inbox yet. It is unfortunately purely for
            demonstrative purposes. Though if you really wanna reach out,
            there's always GitHub.
          </p>
        </div>
        <div className="md:col-start-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
