from flask import Flask, jsonify, request
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origin="*")

@app.route('/songs', methods=['GET'])
def get_songs():
    conn = sqlite3.connect('music.db')
    c = conn.cursor()
    c.execute("SELECT id, songname, artistname, duration FROM songs")
    rows = c.fetchall()
    songs = []
    for row in rows:
        songs.append({
            'id': row[0],
            'songname': row[1],
            'artistname': row[2],
            'duration': row[3]
        })
    conn.close()
    return jsonify({'songs': songs})

@app.route('/songs/<int:id>', methods=['DELETE'])
def delete_song(id):
    conn = sqlite3.connect('music.db')
    c = conn.cursor()
    c.execute("DELETE FROM songs WHERE id=?", (id,))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
