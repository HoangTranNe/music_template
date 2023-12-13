import React from 'react';
import Top from "../components/Top";
import ProfileArtist from "./ProfileArtist"
function Artist() {

    return (
        <div> 
            <div className="div" style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "300px"                       
            }}>
            <div style={{
              marginLeft: "-32px"
            }}>
              <Top/>
              <br/>               
            </div>  
            <div style = {{
              marginLeft: "200px"
            }}>
              <ProfileArtist/>  
            </div>       
          <div className="div-2" style={{
            color: "#fff",            
            marginTop: "41px",
            width: "100%",
            font: "700 32px/40px Circular Std, -apple-system, Roboto, Helvetica, sans-serif",
          }}>Your top genres</div>

          <div className="div-3" style={{
            marginTop: "17px",
            width: "100%",
            padding: "0 20px"}}>

            <div className="div-4" style={{
              gap: "20px",
              display: "flex"
            }}>
              <div className="column" style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "34%",
                marginLeft: "0px"
              }}>
                <div className="div-5" style={{
                     color: "#fff",
                     whiteSpace: "nowrap",
                     borderRadius: "4px",
                     backgroundColor: "#e8115b",
                     flexGrow: "1",
                     alignItems: "start",
                     width: "100%",
                     padding: "20px 60px 90px 16px",
                     font: "700 32px/40px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"
                }}>Hip Hop</div>
              </div>
              <div className="column-2" style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "34%",
                marginLeft: "20px"
              }}>
                <div className="div-6" style={{
                  color: "#fff",
                  whiteSpace: "nowrap",
                  borderRadius: "4px",
                  backgroundColor: "var(--genre-genre-01, #55a891)",
                  flexGrow: "1",
                  alignItems: "start",
                  width: "100%",
                  padding: "20px 60px 94px 16px",
                  font: "700 32px/40px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"
                }}>Electronic</div>
              </div>
              <div className="column-3" style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "normal",
                    width: "33%",
                    marginLeft: "20px"
              }}>
                <div className="div-7" style={{
                      color: "#fff",
                      whiteSpace: "nowrap",
                      borderRadius: "4px",
                      backgroundColor: "var(--genre-genre-04, #f037a5)",
                      flexGrow: "1",
                      alignItems: "start",
                      width: "100%",
                      padding: "20px 60px 94px 16px",
                      font: "700 32px/40px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"                    
                }}>Alternative</div>
              </div>
            </div>
          </div>
          <div className="div-8" style={{
            color: "var(--secondary-secondary-03, #fff)",
            marginTop: "41px",
            width: "100%",
            font: "700 32px/40px Circular Std, -apple-system, Roboto, Helvetica, sans-serif",
          }}>Browse all</div>
          
          <div className="div-9" style={{             
               display: "flex",
               marginTop: "24px",
               width: "100%",
               justifyContent: "space-between",
               gap: "20px",
               padding: "0 20px"             
          }}>
            <div className="div-10" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-05, #af2896)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 100px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Lounge</div>
            <div className="div-11" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-09, #1d3164)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 83px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Blues</div>
            <div className="div-12" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-02, #27856a)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 83px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Funk</div>
            <div className="div-13" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--neutral-neutral-01, #b2b2b2)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 83px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Retro</div>
            <div className="div-14" style={{
                 color: "#fff",
                 whiteSpace: "nowrap",
                 borderRadius: "4px",
                 backgroundColor: "var(--genre-genre-07, #477d95)",
                 flexGrow: "1",
                 alignItems: "start",
                 padding: "16px 60px 83px 16px",
                 font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"
            }}>Latin</div>
            <div className="div-15" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-11, #e13300)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 83px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Jazz</div>
          </div>
          <div className="div-16" style={{            
              display: "flex",
              marginTop: "24px",
              width: "100%",
              justifyContent: "space-between",
              gap: "20px",
              padding: "0 20px"
            }}>
            <div className="div-17" style={{               
                 color: "#fff",
                 whiteSpace: "nowrap",
                 borderRadius: "4px",
                 backgroundColor: "var(--genre-genre-12, #ba5d07)",
                 flexGrow: "1",
                 padding: "16px 57px 94px 16px",
                 font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"               
            }}>Ambient</div>
            <div className="div-18" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-03, #5f8109)",
                flexGrow: "1",
                padding: "16px 41px 94px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Cinematic</div>
            <div className="div-19" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--primary-primary-01, #1db954)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 90px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>Fantasy</div>
            <div className="div-20" style={{                
                  color: "#fff",
                  whiteSpace: "nowrap",
                  borderRadius: "4px",
                  backgroundColor: "var(--neutral-neutral-03, #535353)",
                  flexGrow: "1",
                  alignItems: "start",
                  padding: "17px 60px 90px 16px",
                  font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"                
            }}>Pop</div>
            <div className="div-21" style={{              
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-01, #55a891)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 94px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"              
            }}>World</div>
            <div className="div-22" style={{
                color: "#fff",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                backgroundColor: "var(--genre-genre-07, #477d95)",
                flexGrow: "1",
                alignItems: "start",
                padding: "17px 60px 94px 16px",
                font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"
            }}>Folk</div>
          </div>
        </div>
      <style jsx>{`
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
          }
          .div-2 {
            max-width: 100%;
            margin-top: 40px;
          }
          .div-3 {
            max-width: 100%;
          }
          .div-4 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
          .column {
            width: 100%;
          }
          .div-5 {
            white-space: initial;
            margin-top: 24px;
            padding-right: 20px;
          }
          .column-2 {
            width: 100%;
          }
          .div-6 {
            white-space: initial;
            margin-top: 24px;
            padding: 0 20px 40px 0;
          }
          .column-3 {
            width: 100%;
          }
          .div-7 {
            white-space: initial;
            margin-top: 24px;
            padding: 0 20px 40px 0;
          }
          .div-8 {
            max-width: 100%;
            margin-top: 40px;
          }
          .div-9 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
          .div-10 {
            white-space: initial;
            padding: 0 20px 40px 0;
          }
          .div-11 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-12 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-13 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-14 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-15 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-16 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
          .div-17 {
            white-space: initial;
            padding: 0 20px 40px 0;
          }
          .div-18 {
            white-space: initial;
            padding: 0 20px 40px 0;
          }
          .div-19 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-20 {
            white-space: initial;
            padding-right: 20px;
          }
          .div-21 {
            white-space: initial;
            padding: 0 20px 40px 0;
          }
          .div-22 {
            white-space: initial;
            padding: 0 20px 40px 0;
          }
        }                                                                          
      `}</style>    
    </div>
    );
    }
export default Artist;
