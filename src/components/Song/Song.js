import React from 'react';

const Song = ({ songs }) => {
    return (
        <div>
            {songs.map((song) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{song.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{song.artist}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Song;