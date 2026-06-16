interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  icon: string;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
}

export default function FormField({
  label,
  name,
  icon,
  type = "text",
  placeholder,
  multiline = false,
}: FormFieldProps) {
  return (
    <div className="group flex min-w-11/12 flex-col items-start md:min-w-4/6">
      <label
        className="rounded-t-xl bg-jasmine-dark px-4 pt-1 text-tahini group-focus-within:bg-chicory group-focus-within:text-molasses"
        htmlFor={name}
      >
        <i className={`bi ${icon} pr-2`}></i>
        {label} *
      </label>

      {multiline ? (
        <textarea
          className="mb-4 h-32 w-full rounded-xl rounded-tl-none border-3 border-jasmine-dark p-2 focus-visible:border-chicory focus-visible:outline-none"
          id={name}
          name={name}
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          className="mb-4 w-full rounded-xl rounded-tl-none border-3 border-jasmine-dark p-2 focus-visible:border-chicory focus-visible:outline-none"
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          required
        ></input>
      )}
    </div>
  );
}
