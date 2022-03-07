import React from "react";
import SocketService from "../services/socket.service";
import axios from "axios";
const SocketContext = React.createContext({});

class SocketProvider extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      socket: SocketService,
    };
  }

  joinRoom = (value: any) => {
    //@ts-ignore
    this.state.socket && this.state.socket.joinRoom(value);
  };
  leaveRoom = (value: any) => {
    //@ts-ignore
    this.state.socket && this.state.socket.leaveRoom(value);
  };

  render() {
    const value = {
      state: {
        //@ts-ignore
        socket: this.state.socket,
      },
      actions: {
        joinRoom: this.joinRoom,
        leaveRoom: this.leaveRoom,
      },
    };
    return (
      <SocketContext.Provider value={value}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}

export { SocketContext, SocketProvider };
