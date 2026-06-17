interface FormFieldProps {
  label: string;
  name: string;
  icon: string;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function FormField({
  label,
  name,
  icon,
  type = "text",
  placeholder,
  multiline = false,
  value,
  error,
  onChange,
  onBlur,
}: FormFieldProps) {
  const hasError = Boolean(error);

  return (
    <div className="group flex min-w-11/12 flex-col items-start md:min-w-4/6">
      <label
        className={`rounded-t-xl px-4 pt-1 text-tahini ${
          hasError
            ? "bg-berry-dark group-focus-within:bg-berry"
            : "bg-jasmine-dark group-focus-within:bg-chicory group-focus-within:text-molasses"
        }`}
        htmlFor={name}
      >
        <i className={`bi ${icon} pr-2`}></i>
        {label} *
      </label>

      {multiline ? (
        <textarea
          className={`mb-4 h-32 w-full rounded-xl rounded-tl-none border-3 p-2 focus-visible:outline-none ${
            hasError
              ? "border-berry-dark focus-visible:border-berry"
              : "border-jasmine-dark focus-visible:border-chicory"
          }`}
          name={name}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
      ) : (
        <input
          className={`mb-4 w-full rounded-xl rounded-tl-none border-3 p-2 focus-visible:outline-none ${
            hasError
              ? "border-berry-dark focus-visible:border-berry"
              : "border-jasmine-dark focus-visible:border-chicory"
          }`}
          name={name}
          placeholder={placeholder}
          type={type}
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
      )}
    </div>
  );
}
