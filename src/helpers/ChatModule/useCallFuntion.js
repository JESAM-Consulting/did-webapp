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

const useCallFuntion = ({ setAddMore, msg, setAddMoregrapher, roleType }) => {
  const [message, setMessages] = useState([]);
  const [roomId, setRoomId] = useState([]);
  const [loader, setloader] = useState(false);
  const [rooIdFilter, setRooIdFilter] = useState([]);
  const socketRef = useRef();
  const userToken = localStorage.getItem("token");
  const history = useHistory();
  console.log("tokennn", msg);

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);
    // socketRef.current.emit("login", {
    //   userId: userId?._id,
    // });
    socketRef.current.emit("connection", { reconnect: true });

    console.log("roleType", roleType);
    socketRef.current.emit("chat-room", {
      // user: Auth.getToken(),
      user: userToken,
      type: roleType,
    });

    setloader(true);

    socketRef.current.on("chat-room", function (event) {
      if (event && event?.room == "get") {
        socketRef.current.emit("chat-room", {
          // user: Auth.getToken(),
          user: userToken,
          type: roleType,
        });

        // console.log("eventWWWWWWWWWWWWWW",event)
        // // setMessages([...event?.room]);
        // setRoomId([...event?.room])
      }
    });

    socketRef.current.on("history", function (event) {
      if (event && event?.room) {
        console.log("eventWWWWWWWWWWWWWW", event);

        const Data = event?.room.sort(function (a, b) {
          var dateA = new Date(a.createdAt),
            dateB = new Date(b.createdAt);
          return dateA - dateB;
        });
        // setMessages([...event?.room]);
        setRoomId([...Data]);
        setRooIdFilter([...Data]);
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
  }, [socketRef]);

  const sendInitChat = (id, data) => {
    console.log("firscsdvdfbvt", id, data);
    //   socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, function (event) {
    //     // messages.push(event);
    //     // setMessages([...messages]);
    //     setLastChangeData(!lastChangeData);
    //   });
    socketRef.current.emit("init-chats", {
      token: Auth.getToken(),
      id: id,
      type: roleType,
    });

    socketRef.current.on("init-chats", function (event) {
      console.log("DDDDSDSDSDSD", event);
      if (data === "msgPhotographerView") {
        history.push({
          pathname: "/photoeditor/photographer/meassge",
          state: { eventId: event?.init.payload.chatRoom._id },
        });
      }
      if (data === "msgaccPhotographerView") {
        history.push({
          pathname: "/accountant/photographer/meassge",
          state: { eventId: event?.init.payload.chatRoom._id },
        });
      }
      if (data === "msglawyerPhotographerView") {
        history.push({
          pathname: "/lawyer/photographer/meassge",
          state: { eventId: event?.init.payload.chatRoom._id },
        });
      }
      if (data === "msgadvPhotographerView") {
        history.push({
          pathname: "/advertiser/photographer/meassge",
          state: { eventId: event?.init.payload.chatRoom._id },
        });
      }
      if (data === "msgwdPhotographerView") {
        history.push({
          pathname: "/webdeveloper/photographer/meassge",
          state: { eventId: event?.init.payload.chatRoom._id },
        });
      }
      if (data === "msgvaPhotographerView") {
        history.push({
          pathname: "/virtualass/photographer/meassge",
          state: { eventId: event?.init.payload.chatRoom._id },
        });
      }
    });
    if (data === "msgphotoeditor") {
      history.push("/photoeditors/messages");
    } else if (data === "msgphotographer") {
      history.push("/photoeditor/photographer/meassge");
    } else if (data === "msgphotographertoacc") {
      history.push("/accountant/photographer/meassge");
    } else if (data === "msgphotographertolawyer") {
      history.push("/lawyer/photographer/meassge");
    } else if (data === "msgphotographertowd") {
      history.push("/webdeveloper/photographer/meassge");
    } else if (data === "msgphotographertoadv") {
      history.push("/advertiser/photographer/meassge");
    } else if (data === "msgphotographertova") {
      history.push("/virtualass/photographer/meassge");
    } else if (data === "acctophotographer") {
      history.push("/affiliate_accountant_meassge");
    } else if (data === "lawtophotographer") {
      history.push("/lawyers-message");
    } else if (data === "advtophotographer") {
      history.push("/advertiser-message");
    } else if (data === "wdtophotographer") {
      history.push("/webdeveloper-message");
    } else if (data === "vatophotographer") {
      history.push("/virtualassistant-message");
    } else if (data === "msgfindjob") {
      history.push("/findpostjob/message-post-job");
    }

    setAddMore(false);
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

export default useCallFuntion;
