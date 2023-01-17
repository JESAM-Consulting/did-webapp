import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { socketUrl } from "../../config/API/api-dev";
import Auth from "../Auth";
// import { DataLoaded } from "../App";
// import { API } from "../config/api.config";

// import Auth from "./auth";
const NEW_CHAT_MESSAGE_EVENT = "new-message";
const CHANGE_ANSWER = "check-answer";
const SOCKET_SERVER_URL = socketUrl;
// const SOCKET_SERVER_URL = "https://api.leaderbridge.rejoicehub.com/";
const userId = Auth.getUserData();

const useCallProjectFuntion = ({
  setAddMore,
  msg,
  setAddMoregrapher,
  projectID,
  randomData,
  setRandomData,
}) => {
  const [message, setMessages] = useState([]);
  const [roomId, setRoomId] = useState([]);
  const [loader, setloader] = useState(false);
  const [rooIdFilter, setRooIdFilter] = useState([]);
  const socketRef = useRef();
  const userToken = localStorage.getItem("token");
  const history = useHistory();
  console.log("projectID", randomData);

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);
    // socketRef.current.emit("login", {
    //   userId: userId?._id,
    // });
    socketRef.current.emit("connection", { reconnect: true });

    socketRef.current.emit("chat-room-project-search", {
      // user: Auth.getToken(),
      roomId: projectID,
      user: userToken,
    });
    setloader(true);
    socketRef.current.on("chat-room-project-search", function (event) {
      console.log("DDDDDDDDDDDDD", event);
      if (event && event?.room == "get") {
        socketRef.current.emit("chat-room-project-search", {
          // user: Auth.getToken(),
          user: userToken,
          roomId: projectID,
        });

        console.log("eventWWWWWWWWWWWWWW", event);
        // setMessages([...event?.room]);
        setRoomId([...event?.room]);
      }
    });

    socketRef.current.on("history", function (event) {
      if (event && event?.room) {
        console.log("eventWWWWWWWWWWWWWW", event);
        // setMessages([...event?.room]);
        setRoomId([...event?.room]);
        setRooIdFilter([...event?.room]);
        setloader(false);
      }
    });

    // socketRef.current.on(CHANGE_ANSWER, function (event) {
    //   socketRef.current.emit("chat-room", {
    //     user: Auth.getToken(),
    //   });
    // });

    return () => {
      socketRef.current.disconnect();
    };
  }, [socketRef, randomData]);

  const sendInitChat = (id, data, hireId) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAA", hireId, id, data);
    //   socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, function (event) {
    //     // messages.push(event);
    //     // setMessages([...messages]);
    //     setLastChangeData(!lastChangeData);
    //   });
    socketRef.current.emit("init-chats-project", {
      token: Auth.getToken(),
      id: id,
      projectId: hireId,
    });
    if (data === "msgPhotographerProject") {
      history.push("/photoeditor/inProgress");
    } 
    setRandomData(Math.random());

    //   if (data === "msgPhotographerAccountant") {
    //     history.push("/photoeditors/messages")
    //   }else if (data === "msgphotographer"){
    //     history.push("/photoeditor/photographer/meassge")
    //   }
    //   setAddMore(false)
  };

  return {
    roomId,
    sendInitChat,
    setRoomId,
    setRooIdFilter,
    rooIdFilter,
    loader,
  };
};

export default useCallProjectFuntion;
