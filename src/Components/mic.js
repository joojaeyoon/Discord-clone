import React, { useState } from "react";
import { ReactMic } from "react-mic";

import mic_on from "./imgs/mic_on.png";
import mic_off from "./imgs/mic_off.png";

export const Mic = props => {
  const [record, setRecord] = useState(false);
  const [blobURL, setblobURL] = useState("");
  const { sendBlob } = props;

  const onData = recordedBlob => {
    console.log("chunk of real-time data is: ", recordedBlob);
    //sendBlob(recordedBlob);
  };

  const onStop = recordedBlob => {
    console.log("recordedBlob is: ", recordedBlob);
    setblobURL(recordedBlob.blobURL);
    sendBlob(recordedBlob.blob);
  };

  return (
    <div>
      <ReactMic
        record={record}
        onStop={onStop}
        onData={onData}
        strokeColor="transparent"
        backgroundColor="transparent"
        width={30}
        height={20}
      />
      <audio controls="controls" src={blobURL}></audio>
      <button
        onClick={() => setRecord(!record)}
        style={{
          backgroundColor: "transparent",
          borderColor: "transparent"
        }}
      >
        <img
          src={record ? mic_on : mic_off}
          style={{
            width: "20px",
            height: "30px"
          }}
          alt="mic"
        />
      </button>
    </div>
  );
};
