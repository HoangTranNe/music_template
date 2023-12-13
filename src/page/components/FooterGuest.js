import { React } from "react";

const FooterGuest = () => {  

  return (
    <div
      style={{
        position: "fixed",
        padding:"10px 10px",
        backgroundColor: "#181818",
        borderTop: "1px solid #282828",
        boxSizing: "border-box",
        width: "85%",
        height: "67.78px",
        textAlign: "left",
        fontSize: "12px",
        color: "#fff",
        fontFamily: "'Helvetica Neue'",
        top: "890px"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "67.78px",
          left: "0px",
          width: "1440px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 1347px)",
            top: "-2px",
            right: "20px",
            left: "1327px",
            borderRadius: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "2px",
              width: "93px",
              height: "4px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "0px",
                right: "0px",
                left: "0px",
                borderRadius: "2px",
                backgroundColor: "#fff",
                height: "4px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "1px",
          right: "0px",
          left: "0px",
          background: "linear-gradient(90deg, #af2896, #509bf5)",
          height: "66.78px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 22.39px)",
            left: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 36.125px 0.59375px 0px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "1.2px",
              lineHeight: "19.2px",
              textTransform: "uppercase",
            }}
          >
            Preview of Spotify
          </div>
          <div
            style={{
              position: "relative",
              fontSize: "15px",
              lineHeight: "25.6px",
              marginTop: "-1.81px",
            }}
          >
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </div>
        </div>
        <button type="button"  style={{                
                borderRadius: "500px",
                backgroundColor: "#fff",                                            
                justifyContent: "flex-start",
                padding: "15px 33.8125px 15px 34px",                                
                fontSize: "15px",
                color: "#000",
                marginLeft : '1300px',
                marginTop: '6px'
            }}>
            <a href = "../Register" style={{ 
                position: "relative",
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
                letterSpacing: "0.5px",
                lineHeight: "19.2px",
                textTransform: "uppercase",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
         }}>Sign up free</a>
        </button>
      </div>
    </div>
  );
};

export default FooterGuest;
