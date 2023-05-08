import sqlite3

conn = sqlite3.connect('music.db')
cursor = conn.cursor()
# cursor.execute('''CREATE TABLE songs
#                  (id INTEGER PRIMARY KEY,
#                   artistname TEXT,
#                   duration TEXT,
#                   songname TEXT)''')

# cursor.execute('DELETE FROM songs')
# cursor.execute('SELECT artistname FROM songs')
# r=cursor.fetchall()
# print(r)
conn.commit()

conn.close