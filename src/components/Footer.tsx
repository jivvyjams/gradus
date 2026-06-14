export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center">
      <hr></hr>
      <h3>Attributions</h3>
      <ul className="flex flex-col justify-evenly pb-2 text-chicory-dark md:flex-row dark:text-chicory">
        <li>
          <i className="bi bi-cloud-sun-fill pr-2"></i>
          <a href="https://open-meteo.com/">Open-Meteo</a>
        </li>
        <li>
          <i className="bi bi-file-earmark-font-fill pr-2"></i>
          <a href="https://fontsource.org/">Fontsource</a>
        </li>
        <li>
          <i className="bi bi-bootstrap-fill pr-2"></i>
          <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>
        </li>
        <li>
          <i className="bi bi-transparency pr-2"></i>
          <a href="https://www.svgrepo.com/">SVG Repo</a>
        </li>
      </ul>
      <p>&copy; {year} Jawad Al Bdiwi - HackYourFuture Project</p>
    </footer>
  );
}
