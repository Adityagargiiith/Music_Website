from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app, orgins="*")

@app.route('/add_to_playlist', methods=['POST'])
def add_to_playlist():
    song_data = request.get_json()

    conn = sqlite3.connect('music.db')
    c = conn.cursor()

    name = song_data['title']
    duration = song_data['duration']
    artistname=song_data['artistname']
    c.execute("SELECT id FROM songs WHERE name=? AND duration=? AND artistname=?", (name, duration,artistname))
    result = c.fetchone()
    if result:
        return  '', 409

    c.execute("SELECT MAX(id) FROM songs")
    result = c.fetchone()
    if result[0]:
        song_id = result[0] + 1
    else:
        song_id = 1

    c.execute("INSERT INTO songs (id, name, duration, artistname) VALUES (?, ?, ?, ?)", (song_id, name, duration, artistname))
    conn.commit()
    conn.close()

    return  '', 201

if __name__ == "__main__":
    app.run(debug=True)