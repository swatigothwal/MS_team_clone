import { useParams } from "react-router";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
import Message from "components/Message";
import { message as copied} from 'antd'
import 'antd/dist/antd.css'

const END_POINT = "http://localhost:5001/";

function Room() {

  const [isPresenting, setIsPresenting] = useState(false);
  const [screenCastStream, setScreenCastStream] = useState();
  const [streamObj, setStreamObj] = useState();
  const loadingStatus = useSelector((state) => state.auth.loading);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const [room] = useState(useParams().id);
  const user = useSelector((state) => state.auth.user);
   const history = useHistory();
  const [socket] = useState(() =>
    io(END_POINT, {
      transports: ["websocket"],
      upgrade: false,
    })
  );
  
  const [peerId, setPeerId] = useState();
  const [members, setMembers] = useState([]);
  const [peer] = useState(
    () =>
      new Peer({
        config: {
          iceServers: [
            { urls: 'stun:stun2.1.google.com:19302'}
          ],
        },  
        trickle: false,
      })
  );

  useEffect(() => {

    //Emitted when a connection to the PeerServer is established
    peer?.on("open", (id) => {  
       setPeerId(id);
      socket.emit("joinRoom", { name: user?.name, room, peerID: id });

      socket.on("allMembers", (userPeers) => {
        let videos = document.getElementById("videoContainer");
        if (videos) videos.innerHTML = "";
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {

            setStreamObj(stream);
            playStream(id, stream, true);
            userPeers.forEach((member) => {
              if (member !== id) {
                let call = peer.call(member, stream);
                call?.on("stream", (remoteStream) => {
                  playStream(member, remoteStream);
                });
              }
            });
            updateStream(userPeers);
          });

        // Answer
        //Emitted when a remote peer attempts to call you
        peer.on("call", (call) => {
          if (videos) videos.innerHTML = "";
          navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
              call.answer(stream);
              playStream(id, stream, true);
              userPeers.forEach((member) => {
                if (member !== id) {
                  call?.on("stream", (remoteStream) => {  //stream event emmited when a remote peer adds a stream
                    playStream(member, remoteStream);
                  });
                }
              });
              updateStream(userPeers);
            });
        });

        setMembers(userPeers);
      });
    });
  }, [socket, room, user, peer, members]);

  useEffect(() => {
    return () => {
      socket?.emit("peerClose", { peerId });
    };
  }, [socket, peerId]);

  useEffect(() => {
    updateStream(members);
  }, [members]);

  if (!authStatus && !loadingStatus) {
    return <Redirect to="/login" />;
  }

  function updateStream(userPeers) {
    let videos = document.getElementById("videoContainer");
    let arr = [];
    for (let i = 0; i < videos.childNodes.length; i++) {
      if (!userPeers.includes(videos.childNodes[i].id)) {
        arr.push(videos.childNodes[i]);
      }
      console.log(arr);
    }

    arr.forEach((video) => {
      videos.removeChild(video);
    });
  }

  function playStream(id, stream, isLocal = false) {
    if (!document.getElementById(id)) {
      let video = document.createElement("video");
      let div = document.createElement("div");
      let videos = document.getElementById("videoContainer");

      div.className = "max-w-full min-w-min flex justify-center items-center";
      video.srcObject = stream;
      if (isLocal) {
        video.muted = "muted";
      }
      div.id = id;
      var playPromise = video.play(); 
      if (playPromise !== undefined){
        playPromise
          .then((_) => {})
          .catch((error) => {
             console.log(error);
          });
      }
      div.appendChild(video);
      if (videos) videos.appendChild(div);
    }
  }

  const toggleVideo = () => {
    let enabled = streamObj.getVideoTracks()[0].enabled;
    if(enabled)
    {
      streamObj.getVideoTracks()[0].enabled = false;
      setStreamObj(streamObj);
    }else{
      streamObj.getVideoTracks()[0].enabled = true;
      setStreamObj(streamObj);
    }
  };

  const toggleAudio = () => {
    let enabled = streamObj.getAudioTracks()[0].enabled;
    if(enabled)
    {
      streamObj.getAudioTracks()[0].enabled = false;
      setStreamObj(streamObj);
    }else{
      streamObj.getAudioTracks()[0].enabled = true;
      setStreamObj(streamObj);
    }
  };

  const copyUrl = () => {
		let text = window.location.href
		if (!navigator.clipboard) {
			let textArea = document.createElement("textarea")
			textArea.value = text
			document.body.appendChild(textArea)
			textArea.focus()
			textArea.select()
			try {
				document.execCommand('copy')
			  copied.success("Link copied to clipboard!")
			} catch (err) {
      	copied.error("Failed to copy")
			}
			document.body.removeChild(textArea)
			return
		}
		navigator.clipboard.writeText(text).then(function () {
			copied.success("Link copied to clipboard!")
		}, () => {
      copied.error("Failed to copy")
		})
	};

  const screenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
       
        peer.replaceTrack(
          streamObj.getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          streamObj
        );
        setScreenCastStream(screenStream);
        screenStream.getTracks()[0].onended = () => {
          peer.replaceTrack(
            screenStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
          );
        };
   
        setIsPresenting(true);
      });
  };

  const stopScreenShare = () => {
    screenCastStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    peer.replaceTrack(
      screenCastStream.getVideoTracks()[0],
      streamObj.getVideoTracks()[0],
      streamObj
    );
    setIsPresenting(false);
  };

  const disconnectCall = () => {
    peer.destroy();
    history.push("/login");
   window.location.reload();
  };

  return (
    <div className="w-full h-full flex">
      <div 
        className="w-full sm:w-3/4 h-full no-scrollbar grid grid-cols-2 gap-2 overflow-y-scroll bg-black bg-opacity-90 p-2"
        id="videoContainer"
      ></div>
      <div className="w-1/4 hidden sm:block h-full border-l border-gray-300">
        <Message room={room} socket={socket} />
      </div>

      <button onClick={()=>toggleVideo()}> Video </button>
      <button onClick={()=>toggleAudio()}> MUTE </button>
      <button onClick={()=>copyUrl()}> Copy </button>
      <button onClick={()=>screenShare()}> screenShare </button>
      <button onClick={()=>disconnectCall()}> End </button>
                         
    </div>
  );
}

export default Room;
