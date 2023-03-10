import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import socketIOClient from "socket.io-client";
import { socketUrl } from "../../config/API/api-dev";
import Auth from "../Auth";

// import { DataLoaded } from "../App";
// import { API } from "../config/api.config";
// import Auth from "./auth";
const NEW_CHAT_MESSAGE_EVENT = "new-message-project";

const CHANGE_ANSWER = "check-answer";
const SOCKET_SERVER_URL = socketUrl;
const userId = Auth.getUserData();

// const SOCKET_SERVER_URL = "https://api.leaderbridge.rejoicehub.com/";

const useChatProject = (
  roomData,
  hiremePending,
  // setFileAttch
  //   changeData,
  //   displayStarMessagesList,
  //   lastChangeData,
  //   setLastChangeData,
  //   setChangeData,
  //   setAnswerReplayMenu,
  //   setCustomMessage,
  //   setwithdrawModel,
  //   setRequestID,
  //   setVideoChat,
  //   setdeclineReqesutaudio,
  //   setdeclineReqesutvideo,
  //   setQuestReqest,
  //   setdeclineReqesut,
  //   setQuestionReqution,
  //   setAudioLoader,
  //   setVideoLoader
) => {
  //   const { answer, myquery, request, answerLaterUser, AlldataMessageFun } =
  //     useContext(DataLoaded);

  //   const [AlldataMessage, setAlldataMessage] = AlldataMessageFun;

  const [messages, setMessages] = useState([]);
  const [dataToCheckProfileRequest, setDataToCheckProfileRequest] =
    useState("");

  console.log("hiremePending", hiremePending);
  const [requestedBy, setRequestedBy] = useState({});
  const [blockUser, setBlockUser] = useState("");
  const socketRef = useRef();
  const [SentConnectionData, setSentConnectionData] = useState();

  const [ControlChat, setControlChat] = useState();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJlMGU4ZmE0YTA4NDc1NmM5YWUyZCIsImRhdGUiOiIyMDIyLTA3LTExVDEwOjQwOjA0LjIxMVoiLCJlbnZpcm9ubWVudCI6ImxvY2FsIiwiZW1haWwiOiJsb3NpZmFyQHlvcG1haWwuY29tIiwic2NvcGUiOiJsb2dpbiIsInR5cGUiOiJwaG90b2VkaXRvciIsImlhdCI6MTY1NzUzNjAwNH0.qSH_2bG5AkbdE-0WgoQCrCLnCICk6ji8GxtUd8LEleQ";
  const [Friend, setFriend] = useState();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    // socketRef.current.emit("login", {
    //   userId: userId?._id,
    // });

    socketRef.current.emit("connection", { roomId: hiremePending?._id });

    // socketRef.current.on("connection-received-sent", function (event) {
    //   //   setgetNotificationCount(event?.notification?.payload?.count);

    //   if (event?.conection == "get") {
    //     socketRef.current.emit("connection-received-sent", {
    //       user: Auth.getToken(),
    //     });
    //   } else {
    //     setSentConnectionData(event?.conection?.payload?.findConnection);
    //   }
    // });

    // socketRef.current.emit("connection-received-sent", {
    //   user: Auth.getToken(),
    // });

    socketRef.current.emit("join-project", {
      roomId: hiremePending?._id,
      user: userInfo?._id,
    }); // join room

    socketRef.current.on("history", function (event) {
      // event.sort((a, b) =>
      //     a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
      //   );

      setMessages(event);

      console.log("EventDDDDDDDDDDDDDDDDD", event);
      //   setQuestionReqution(false);
      //   setAudioLoader(false);
      //   setVideoLoader(false);
      //   if (event && event?.chats) {
      //     setRequestID("");
      //     setVideoChat("");
      //     setdeclineReqesutvideo("");
      //     setdeclineReqesutaudio("");
      //     setQuestReqest("");
      //     // setdeclineReqesut("");
      //     setControlChat(event?.chats);
      //     setFriend(event?.chats?.isFriend);
      //     let messages = [];
      //     let filterdData = [];
      //     if (displayStarMessagesList === true) {
      //       event.chats.chats.map((message) => {
      //         let filterdData = message?.starredBy?.filter((item) => {
      //           if (item == userInfo?._id) {
      //             messages.push(message);
      //             // return message;
      //           }
      //         });
      //       });
      //     } else {
      //       messages = [...event?.chats?.chats];
      //     }
      //     let allChats = [
      //       ...messages,
      //       ...event?.chats?.request,
      //       ...event?.chats?.requestVideo,
      //       ...event?.chats?.requestAudio,
      //       // ...event?.chats?.sentRequest,
      //     ];
      //     allChats.sort((a, b) =>
      //       a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
      //     );
      //     // let AddNewMessage = [];
      //     // AddNewMessage = [
      //     //   ...event?.chats?.receivedRequest,
      //     //   ...event?.chats?.sentRequest,
      //     // ];
      //     // AddNewMessage.sort((a, b) =>
      //     //   a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
      //     // );
      //     const Data = event?.chats?.request?.filter((item) => {
      //       return item?.requestBy?._id == userInfo?._id;
      //     });
      //     Data?.length > 0
      //       ? setRequestedBy(Data[Data.length - 1])
      //       : setRequestedBy();
      //     // setRequestedBy(event?.chats);
      //     setMessages([...allChats]);
      //     setAlldataMessage([...allChats]);
      //     setBlockUser(event?.chats?.text);
      //     // socketRef.current.emit("chat-room", {
      //     //   user: Auth.getToken(),
      //     // });
      //   } else {
      //     setMessages([]);
      //     setRequestedBy();
      //     setBlockUser("");
      //   }
    });

    // socketRef.current.on(CHANGE_ANSWER, function (event) {
    //   setLastChangeData(!lastChangeData);
    // });

    // sent connection request by user

    return () => {
      socketRef.current.disconnect();
    };
  }, [
    hiremePending?._id,
    //  changeData,
    //  lastChangeData,
    socketRef,
  ]);

  const sendMessage = (messageBody, parentMessageId = null) => {
    //   socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, function (event) {
    //     // messages.push(event);
    //     // setMessages([...messages]);
    //     setLastChangeData(!lastChangeData);
    //   });
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      roomId: hiremePending?._id,
      message: messageBody,
      sender: userInfo?._id,
      // parentMessageId: parentMessageId,
      type: "string",
    });

    // setFileAttch()
  };

  // const sendInitChat = (id) => {
  //   //   socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, function (event) {
  //   //     // messages.push(event);
  //   //     // setMessages([...messages]);
  //   //     setLastChangeData(!lastChangeData);
  //   //   });
  //     socketRef.current.emit("init-chats", {
  //       token: Auth.getToken(),
  //       id:id,
  //     });
  //   };

  //   const BlockUser = (userId) => {
  //     socketRef.current.emit("block-user", {
  //       user: Auth.getToken(),
  //       userId: userId,
  //     });
  //     // setBlockUserModel(false);
  //     toast.success("User Blocked Successfully");
  //   };

  const sentConnectionList = () => {};

  //   const newRequest = (id, type) => {
  //     if (type == "requestAudioAccess") {
  //       setAudioLoader(true);
  //     } else if ("requestVideoAccess") {
  //       setVideoLoader(true);
  //     } else if ("requestProfileAccess") {
  //       setQuestionReqution(true);
  //     }
  //     if (type) {
  //       socketRef.current.emit("new-request-chat", {
  //         user: Auth.getToken(),
  //         id: id,
  //         roomId: roomId,
  //         typeOfRequest: type,
  //       });
  //     } else {
  //       socketRef.current.emit("new-request-chat", {
  //         user: Auth.getToken(),
  //         id: id,
  //         roomId: roomId,
  //       });
  //     }
  //   };

  //   const newDeclineRequest = (id, type) => {
  //     if (type == "video") {
  //       setdeclineReqesutvideo(id);
  //     } else if (type == "audio") {
  //       setdeclineReqesutaudio(id);
  //     } else if (type == "request") {
  //       setdeclineReqesut(id);
  //     }
  //     socketRef.current.emit("decline-request-chat", {
  //       user: Auth.getToken(),
  //       requestId: id,
  //       Notification: type,
  //     });
  //   };

  //   const sendConnection = (receiverId, message) => {
  //     socketRef.current.emit("add-connection", {
  //       user: Auth.getToken(),
  //       receiverId,
  //       message,
  //     });

  //     setCustomMessage("Hi, I want to connect with you ..");

  //     toast.success("Connection Request Sent");

  //     // setOpenConnectionModal(false);
  //   };

  //   const accepTrequestChat = (id, type, data) => {
  //     console.log("data@@@@@@", id);
  //     if (data == "video") {
  //       setVideoChat(id);
  //     } else if (data == "audio") {
  //       setRequestID(id);
  //     } else if (data == "request") {
  //       setQuestReqest(id);
  //     }

  //     if (type) {
  //       socketRef.current.emit("accept-request-chat", {
  //         user: Auth.getToken(),
  //         requestId: id,
  //         status: type,
  //         // Notification: type,
  //       });
  //       // setRequestID("");
  //     } else {
  //       socketRef.current.emit("accept-request-chat", {
  //         user: Auth.getToken(),
  //         requestId: id,
  //         status: null,
  //         Notification: data,
  //       });
  //       // setRequestID("");
  //     }
  //   };

  //   const withdrawRequestData = (userId) => {
  //     socketRef.current.emit("withdraw-request", {
  //       user: Auth.getToken(),
  //       connectionId: userId,
  //     });
  //     // setwithdrawModel(false);
  //     setwithdrawModel(false);

  //     toast.success("Request Withdraw Successfully");
  //   };

  //   const starMessage = (messageId, userId, star) => {
  //     socketRef.current.emit("star-messages", {
  //       messageId: messageId,
  //       userId: userId,
  //       star: star,
  //     });
  //     setAnswerReplayMenu(false);
  //     setChangeData(!changeData);
  //   };

  return {
    messages,
    // messages,
    // dataToCheckProfileRequest,
    // requestedBy,
    sendMessage,
    // sendInitChat,
    // newRequest,
    // newDeclineRequest,
    // accepTrequestChat,
    // blockUser,
    // Friend,
    // starMessage,
    // ControlChat,
    // sendConnection,
    // SentConnectionData,
    // withdrawRequestData,
    // BlockUser,
    // setMessages,
  };
};

export default useChatProject;
