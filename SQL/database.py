import sqlite3

conn = sqlite3.connect('music.db')
cursor = conn.cursor()
# cursor.execute('''CREATE TABLE songs
#                  (id INTEGER PRIMARY KEY,
#                   name TEXT,
#                   duration TEXT,
#                   artistname TEXT)''')

#cursor.execute('DELETE FROM songs')
cursor.execute('SELECT name,artistname FROM songs')
r=cursor.fetchall()
print(r)
# conn.commit()

conn.close()
