import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useWebSocket = <T = any>(path:string) => {
  const socketRef = useRef<Socket>();
  const [data, setData] = useState<T>();

  useEffect(()=>{
    socketRef.current = io(import.meta.env.VITE_WS_BASE || 'ws://localhost:4000', {
      path
    });
    socketRef.current.on('message', (msg:T)=> setData(msg));
    return ()=> { socketRef.current?.disconnect(); };
  }, [path]);

  return data;
};
