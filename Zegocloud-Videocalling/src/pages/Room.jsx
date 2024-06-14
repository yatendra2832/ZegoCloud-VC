import React from "react";

import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = 1693531928;
    const serverSecret = "649013b5d1376150cec63154115f1062";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Yatendra Singh "
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://zego-cloud-vc.vercel.app/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    });
  };

  return (
    <>
      <div>
        <div ref={myMeeting} />
      </div>
    </>
  );
};

export default Room;
