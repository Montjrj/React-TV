import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, selectedShow, setSelectedShow }) {
  if (!shows?.length) {
    return (
      <nav className="shows">
        <p>No shows available.</p>
      </nav>
    );
  }

  return (
    <nav className="shows">
      {shows.map((show) => (
        <div
          key={show.name}
          className={`show ${
            selectedShow?.name === show.name ? "selected" : ""
          }`}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </div>
      ))}
    </nav>
  );
}