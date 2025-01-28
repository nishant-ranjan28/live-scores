# Code Citations

## License: MIT
https://github.com/firagonb3/ChatBoxReact/tree/442a6315d5d6e585a282d93c061c01038213cd89/server.js

```
'express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const
```


## License: unknown
https://github.com/davidamebley/nets_chat_app/tree/c8d7cf61c74d27be3888844969f4b2fc05886a39/backend/server.js

```
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*'
```


## License: unknown
https://github.com/Abhishekkanojiya3/Chat-App-Task/tree/1e1fb852567011eb91c7ddcb2852016380a77be3/app.js

```
('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
```

