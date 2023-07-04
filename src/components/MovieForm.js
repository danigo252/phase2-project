import React, { useState } from 'react';

function MovieForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title: title
        };

        const configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie)
        };

        fetch('http://localhost:3000/movies', configObj)
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Aquí puedes hacer algo con la respuesta del servidor
                setTitle(''); // Limpiar el campo de título después de enviar el formulario
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MovieForm;
