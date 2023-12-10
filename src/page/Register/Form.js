import {useState, React} from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={handleSubmit} style={{
      fontFamily: "sans-serif",
      backgroundColor: "black",
      display:'grid',      
      justifyContent:"center",
      alignItems:'center',
      alignContent: 'center',
    }}>
      
      <input
        style={{          
          marginTop:"50px",
          padding:"8px",
          fontSize:"16px",
          borderRadius:"5px",
          border:"none",
          outline:"none",
          backgroundColor:"gray",
          color:"white",
          width: "450%",
          marginLeft:"-120px"
        }}
        type="text"
        placeholder="Tên"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={{
          marginTop:"50px",
          padding:"8px",
          fontSize:"16px",
          borderRadius:"5px",
          border:"none",
          outline:"none",
          backgroundColor:"gray",
          color:"white",
          width: "450%",
          marginLeft:"-120px"
        }}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /> 

      <input
        style={{
          marginTop:"50px",
          padding:"8px",
          fontSize:"16px",
          borderRadius:"5px",
          border:"none",
          outline:"none",
          backgroundColor:"gray",
          color:"white",
          width: "450%",
          marginLeft:"-120px"
        }}
        type="password"
        placeholder="Mật khẩu"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button 
        style={{
          marginTop:"50px",
          padding:"8px",
          fontSize:"16px",
          borderRadius:"5px",
          border:"none",
          outline:"none",
          backgroundColor:"gray",
          color:"white",
          width: "150%", 
          marginLeft:"-20px"         
        }}
        type="submit">Đăng ký</button>
    </form>

    
  );
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Thực hiện logic đăng ký
};

export default Form;
