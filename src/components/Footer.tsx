export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <i className="bi bi-file-earmark-font"></i>
      <h3>Attributions</h3>
      <ul>
        <li>
          <a href="https://open-meteo.com/">Open-Meteo Weather API</a>
        </li>
        <li>
          <i
            className="bi bi-file-earmark-font"
            style={{ fontSize: 1, color: "#0000FF" }}
          ></i>
          <a href="https://fontsource.org/">Fontsource</a>
        </li>
        <li>
          <i
            className="bi bi-bootstrap"
            style={{ fontSize: 1, color: "#0000FF" }}
          ></i>
          <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>
        </li>
        <li>
          <i
            className="bi bi-transparency"
            style={{ fontSize: 1, color: "#0000FF" }}
          ></i>
          <a href="https://www.svgrepo.com/">SVG Repo</a>
        </li>
      </ul>
      <p>&copy; {year} Jawad Al Bdiwi - HackYourFuture Project</p>
    </footer>
  );
}
