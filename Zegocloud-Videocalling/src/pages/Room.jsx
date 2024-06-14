import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    if (!element) return;

    const appId = Number(import.meta.env.VITE_APP_ID);
    const serverSecret = import.meta.env.VITE_APP_SERVER_SECRET;

    // Ensure appId is correctly converted to a number
    if (isNaN(appId)) {
      console.error("Invalid appId, it should be a number");
      return;
    }

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Yatendra Singh"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    if (!zc) {
      console.error("Failed to create ZegoUIKit instance");
      return;
    }

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://zego-cloud-vc.vercel.app/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    });
  };

  useEffect(() => {
    const container = document.getElementById("meeting-container");
    myMeeting(container);
  }, []);

  return (
    <div>
      <div id="meeting-container" />
    </div>
  );
};

export default Room;
