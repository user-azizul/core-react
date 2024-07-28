import React, { useState } from "react";
import QRCODE from "qrcode.react";
import "./QrCode.css";
export default function QrCodeGenerator() {
  const [input, setInput] = useState("");

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", alignContent: "center" }}
    >
      <h1> Conver Your Text To Qr Code</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write..."
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          color: "black"
        }}
      />
      <div className="code">
        <QRCODE size={256} value={input} style={{ width: "300px" }} />
      </div>
    </div>
  );
}
