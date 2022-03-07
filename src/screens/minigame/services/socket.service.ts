import SocketIOClient from "socket.io-client";

export const ENVIRONMENTS = {
  DEVELOPMENT: "http://localhost:8080",
  PRODUCTION: "https://metaphor-service.herokuapp.com/",
};
const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? ENVIRONMENTS.DEVELOPMENT
    : ENVIRONMENTS.PRODUCTION;

class SocketService {
  socket;
  constructor() {
    this.socket = SocketIOClient(baseUrl, {
      transports: ["websocket", "polling"],
    });
  }
  pingPong = () => {
    console.log("PING_PONG");
    this.socket.emit("PING_PONG", { value: "PING_PONG" });
  };
  sendOpenCell = (value: any) => {
    this.socket.emit("SEND_OPEN_CELL", value);
  };
  receiverSendOpenCell = (callback: any) => {
    this.socket.on("RECEIVER_OPEN_CELL", callback);
  };
  sendTotalSupply = (value: any) => {
    this.socket.emit("SEND_TOTAL_SUPPLY", value);
  };
  receiverTotalSupply = (callback: any) => {
    this.socket.on("RECEIVER_TOTAL_SUPPLY", callback);
  };

  joinRoom = (value: any) => {
    this.socket.emit("JOIN_ROOM", value);
  };
  receiverJoinRoom = (callback: any) => {
    this.socket.on("RECEIVER_JOIN_ROOM", callback);
  };
  leaveRoom = (value: any) => {
    this.socket.emit("LEAVE_ROOM", value);
  };
  receiverLeaveRoom = (callback: any) => {
    this.socket.on("RECEIVER_LEAVE_ROOM", callback);
  };
  disconnect = () => {
    this.socket.disconnect();
  };
}
export default new SocketService();
