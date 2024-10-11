import React, { useState } from 'react';

const SCREENS = [
    { id: 1, time: "10:00 AM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { id: 2, time: "2:00 PM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { id: 3, time: "6:00 PM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
];

const MOVIES = [
    { id: 1, title: "Thunivu", image: "https://upload.wikimedia.org/wikipedia/en/6/65/Thunivu_poster.jpg" },
    { id: 2, title: "Varisu", image: "https://upload.wikimedia.org/wikipedia/en/a/af/Varisu_poster.jpg" },
    { id: 3, title: "Akilan", image:"data:image/jpeg;base64,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" },
];

export default function MovieBooking() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedScreen, setSelectedScreen] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (index, screen) => {
        if (screen.id !== selectedScreen?.id) {
            setSelectedSeats([index]);
            setSelectedScreen(screen);
        } else {
            if (selectedSeats.includes(index)) {
                setSelectedSeats(selectedSeats.filter(i => i !== index)); // Deselect seat
            } else {
                setSelectedSeats([...selectedSeats, index]); // Select seat
            }
        }
    };
 const handleBooking =() =>{
    alert(`seats ${selectedSeats.map((index) =>index+1) .join(" , ") } booked for ${selectedScreen.movie.title} at ${selectedScreen.time}`)
    SCREENS=SCREENS.map(screen => {
        if (screen.id ===selectedScreen?.id){
        let seats=screen.seats;
        selectedSeats.map((seat) =>(seats[seat] = 0))
        return{
            ...screen,
            seats:updatedSeats
        }
        }
        return screen
    }) 
    setSelectedMovie(null)
    selectedScreen(null)
    setSelectedSeats()
}
    return (
        <div className="app">
            <h1>Movie Booking App</h1>
            <h2>Choose your movie:</h2>
            <div className='movie-selection'>
                {MOVIES.map(movie => (
                    <div className='movie' key={movie.id} onClick={() => {
                        setSelectedMovie(movie);
                        setSelectedScreen(null);
                        setSelectedSeats([]); // Reset selectedSeats when changing movies
                    }}>
                        <img className='movie-poster' src={movie.image} alt={movie.title} />
                        <div className='movie-title'>{movie.title}</div>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <>
                    <h2>Choose your screen</h2>
                    <div className='screen-selection'>
                        {SCREENS.map(screen => (
                            <div key={screen.id} className={`screen ${selectedScreen?.id === screen.id ? 'selected' : ''}`}>
                                <div className='screen-number'>Screen {screen.id}</div>
                                <div className='screen-time'>{screen.time}</div>
                                <div className='screen-seats'>
                                    {screen.seats.map((seat, index) => (
                                        <div 
                                            key={index} 
                                            className={`seat ${seat ? "available" : 'unavailable'} ${selectedSeats.includes(index) && selectedScreen?.id === screen.id ? "selected" : ""}`} 
                                            onClick={() => {
                                                if (seat) {
                                                    handleSeatSelect(index, { ...screen, movie: selectedMovie });
                                                }
                                            }}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => e.key === 'Enter' && seat && handleSeatSelect(index, { ...screen, movie: selectedMovie })}
                                        >
                                            <div className='seat-number'>{index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <div className='booking-summary'>
                <div className='selected-screen'>
                    {selectedScreen && (
                        <div>
                            <h3>Selected Screen: {selectedScreen.id}</h3>
                            <p>Time: {selectedScreen.time}</p>
                            <p>Movie: {selectedScreen.movie.title}</p>
                        </div>
                    )}
                </div>
                <div className='selected-seat'>
                    {selectedScreen && selectedSeats.length > 0 && (
                        <div>
                            <h2>Selected seats: {selectedSeats.map(index => index + 1).join(", ")}</h2>
                            <h3>No of tickets:{selectedSeats?.length}</h3>
                        </div>
                    )}
                </div>
            </div>
            <button className='payment-button' onClick={handleBooking} disabled={!selectedScreen || selectedScreen ?.length ==0}>Book now</button>
        </div>
    );
}
