import { React, useState } from "react";
const Form = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    // Gửi email hoặc tên người dùng đến máy chủ
  };

  return (
    <div className="form" style={{
      marginTop: "20px",
      padding: "20px",
      fontFamily: "sans-serif", 
    }}>
      <input
        type="email"
        placeholder="Email address or username"
        onChange={(e) => setEmailOrUsername(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          marginRight: "10px"      
        }}
      />
      <button style={{
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        backgroundColor: "green",
        color: "white"
      }} type="submit">Send</button>
    </div>
  );
};
export default Form;