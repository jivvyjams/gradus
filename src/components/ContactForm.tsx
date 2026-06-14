export default function ContactForm() {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // handle the form data...
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="group flex min-w-11/12 flex-col items-start md:min-w-4/6">
        <label
          className="rounded-t-xl bg-jasmine-dark px-4 pt-1 text-tahini group-focus-within:bg-chicory group-focus-within:text-molasses"
          htmlFor="name"
        >
          <i className="bi bi-person-vcard-fill pr-2"></i>Name *
        </label>
        <input
          className="mb-4 w-full rounded-xl rounded-tl-none border-3 border-jasmine-dark p-2 focus-visible:border-chicory focus-visible:outline-none"
          name="name"
          id="name"
          placeholder="John Smith"
          required
        ></input>
      </div>
      <div className="group flex min-w-11/12 flex-col items-start md:min-w-4/6">
        <label
          className="rounded-t-xl bg-jasmine-dark px-4 pt-1 text-tahini group-focus-within:bg-chicory group-focus-within:text-molasses"
          htmlFor="email"
        >
          <i className="bi bi-mailbox2-flag pr-2"></i>E-mail *
        </label>
        <input
          className="mb-4 w-full rounded-xl rounded-tl-none border-3 border-jasmine-dark p-2 focus-visible:border-chicory focus-visible:outline-none"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        ></input>
      </div>
      <div className="group flex min-w-11/12 flex-col items-start md:min-w-4/6">
        <label
          className="rounded-t-xl bg-jasmine-dark px-4 pt-1 text-tahini group-focus-within:bg-chicory group-focus-within:text-molasses"
          htmlFor="message"
        >
          <i className="bi bi-chat-square-text-fill pr-2"></i>Message *
        </label>
        <textarea
          className="mb-4 h-32 w-full rounded-xl rounded-tl-none border-3 border-jasmine-dark p-2 focus-visible:border-chicory focus-visible:outline-none"
          name="message"
          placeholder="Hello, what's on your mind?"
          required
        ></textarea>
      </div>
      <button
        className="cursor-pointer rounded-2xl bg-chicory p-4 font-semibold text-molasses hover:brightness-90 dark:bg-chicory-dark dark:text-tahini dark:brightness-110"
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}
