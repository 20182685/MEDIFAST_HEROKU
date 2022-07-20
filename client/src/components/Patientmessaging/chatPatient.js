import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const CONNECTION_PORT = 'localhost:5000/';

const Chat = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('Cirujía');
  const [username, setUsername] = useState('');

  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([{}]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList([...messageList, data]);
    });
  });

  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit("join_room", room);
  };

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        author: username,
        message: message
      }
    }

    socket.emit('send_message', messageContent);
    setMessageList([...messageList, messageContent.content])

    setMessage('');
  }

  return (
    <div className='layout-specing'>
      <div className='row'>
        <div className='d-md-flex justify-content-between'>
          <div className='col-xl-9 col-lg-6 col-md-4'>
            <h5 className='mb-0'>Mensajes</h5>
            <nav className='d-inline-block mt-2'>
              <ul className='breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0'>
                <li className='breadcrumb-item'><a>Página Principal</a></li>
                <li className='breadcrumb-item active'>Mensajes</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='frame mt-4'>
          {!loggedIn ?
            <div className='login'>
              <div className='inputs'>
                <input type='text' placeholder='Ingrese su usuario' onChange={(e) => { setUsername(e.target.value); }} />
                <input type='text' placeholder='Canal de atención' onChange={(e) => { setRoom(e.target.value); }} />
              </div>
              <div>
                <button onClick={connectToRoom}>Ingresar al Chat</button>
              </div>
            </div>
            :
            <div className='chatContainer'>
              <div className='messages'>
                {messageList.map((val, key) => {
                  return (
                    <div className='messageContainer' id={val.author === username ? "You" : "Other"}>
                      <div className='messageIndividual'>{val.author}: {val.message}</div>
                    </div>
                  );
                })};
              </div>
              <div className='messageInputs'>
                <input type='text' placeholder='Ingrese un mensaje...' onChange={(e) => { setMessage(e.target.value) }} />
                <button onClick={sendMessage}>Enviar</button>
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
};


export default Chat;