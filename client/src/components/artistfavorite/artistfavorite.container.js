import ArtistFavoriteUI from "./artistfavorite.presenter"
import React, { useState, useEffect } from "react"

export default function ArtistFavorite() {
    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);

    // useEffect(() => {
    //     const fetchedArtists = [
    //         { id: 1, name: "아티스트1" },
    //         { id: 2, name: "아티스트2" }
    //     ];

    //     setArtists(fetchedArtists);
    // }, []);

    const handleSelectArtist = (artist) => {
        setSelectedArtist(artist);
    };

    return(
        <ArtistFavoriteUI
            artists={artists}
            selectedArtist={selectedArtist}
            onSelectArtist={handleSelectArtist}
        />
    );
}