export default function AboutPage() {
  return (
    <div className="mx-4 flex flex-col place-items-center gap-4 px-4">
      <h2 className="text-4xl font-bold md:text-6xl">About</h2>
      <p className="px-8 text-center text-2xl">
        Gradus is a simple weather app that lets you search for any city and see
        its current weather forecast. It relies Open-Meteo's geocoding and
        forecasting APIs to turn a place name into live weather data. Gradus
        supports both light and dark themes and is built responsively across
        desktop and mobile. The name is derived from the Latin word for
        temperature.
      </p>
      <p className="px-8 text-center text-2xl">
        This app serves as submission the mid-term project for the
        HackYourFuture program and was built within a week. Due to skill
        limitations at this stage as well as the time constraints, some ideas
        were cut short or not implemented. This includes a navigation bar,
        favorite locations, user settings as well as more detailed views for the
        weather page (hourly, daily forecasts).
      </p>
      <p className="pt-4 text-2xl">
        Here's the tech-stack used to create this project:
      </p>
      <ul className="flex flex-col gap-4 pb-8 text-lg md:block md:columns-2">
        <li className="flex md:py-2">
          <i className="bi bi-filetype-tsx pr-2"></i>
          <p>
            <strong>React:</strong> for building the component-based user
            interface
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-lightning-fill pr-2"></i>
          <p>
            <strong>Vite:</strong> for fast development tooling and bundling
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-box-seam-fill pr-2"></i>
          <p>
            <strong>npm:</strong> for managing project dependencies and scripts
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-git pr-2"></i>
          <p>
            <strong>Git:</strong> for version control and tracking changes
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-triangle-fill pr-2"></i>
          <p>
            <strong>Vercel:</strong> for deploying and hosting the web app
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-braces-asterisk pr-2"></i>
          <p>
            <strong>Tailwind CSS:</strong> for utility-first styling
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-code-slash pr-2"></i>
          <p>
            <strong>VS Code:</strong> for writing and editing the code
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-patch-check-fill pr-2"></i>
          <p>
            <strong>ESLint:</strong> for catching code issues and enforcing code
            quality
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-magic pr-2"></i>
          <p>
            <strong>Prettier:</strong> for automatic code formatting and
            Tailwind class sorting
          </p>
        </li>
        <li className="flex md:py-2">
          <i className="bi bi-file-earmark-image pr-2"></i>
          <p>
            <strong>GIMP:</strong> for editing image assets
          </p>
        </li>
      </ul>
      <p className="text-2xl">
        Attributions for open-source APIs & libraries can be found in the footer
        at the bottom of the page.
      </p>
      <p className="text-2xl">
        Thank you for taking the time to look over this web app! :D
      </p>
    </div>
  );
}
