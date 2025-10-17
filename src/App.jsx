import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import EpisodeList from "./episodes/EpisodeList";
import EpisodeDetails from "./episodes/EpisodeDetails";

/**
 * React TV – A web streaming platform that allows users
 * to browse and select shows, then view episode details.
 */
export default function App() {
  // list of shows (from your data file)
  const [shows] = useState(tvShows);

  // which show is currently selected
  const [selectedShow, setSelectedShow] = useState(null);

  // which episode is currently selected
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
      </header>

      <main>
        {/* --- Show selection list --- */}
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={(show) => {
            setSelectedShow(show);
            setSelectedEpisode(null); // reset episode when user changes shows
          }}
        />

        {/* --- Episodes for the chosen show --- */}
        {selectedShow && (
          <EpisodeList
            name={selectedShow.name}
            episodes={selectedShow.episodes || []}
            selectedEpisode={selectedEpisode}
            setSelectedEpisode={setSelectedEpisode}
          />
        )}

        {/* --- Details for the chosen episode --- */}
        <EpisodeDetails episode={selectedEpisode} />
      </main>
    </>
  );
}