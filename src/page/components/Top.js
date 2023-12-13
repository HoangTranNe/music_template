import React from 'react';
import Button from './ButtonTop'

function Top() {
  const Logout = {
    color: "white",
    textDecoration: "none"
  }
  return (
    <div style={{
        marginLeft: "50px",    
        marginTop: "10px",
        position: "fixed",     
        float: "top",       
        width: "100%",                
        color: "white",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: ".3s ease-in-out all",
    }}>
        <div className="d-flex align-items-center pt-2 pb-2" style={{
            justifyContent: "space-between"
        }}>
            <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "50%", width: "30px", height: "30px", border: "0"}} className="me-3" onClick={() => window.history.back()}>
                    <i className="fas fa-chevron-left"></i>
            </button>
            <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "50%", width: "30px", height: "30px", border: "0"}}onClick={() => window.history.go()}>
                <i className="fas fa-chevron-right"></i>
            </button>

            <div style={{
                marginLeft: "50px"
            }}>
                <Button isSelected={true} link ="../Playlists" style={{backgroundColor: "#333333", color: "white"}} className='p-2 ps-4 pe-4 ms-3'>
                    Playlist
                </Button>

                <Button isSelected={false} link="/podcast" style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
                    Podcasts
                </Button>

                <Button isSelected={false} link = "../Artist"style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
                    Artists
                </Button>

                <Button isSelected={false} style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
                    Albums
                </Button>
            </div>
            <input 
                type="search" 
                placeholder="Search" 
                style={{                        
                    padding:"10px",
                    fontSize:"16px",
                    borderRadius:"5px",
                    border:"none",
                    outline:"none",
                    backgroundColor:"gray",
                    color:"white",
                    width: "20%",
                    marginLeft:"120px"
                }}/>     

            <div style={{
                marginLeft: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "400px",
                marginRight: "50px",
                float: "right",
                fontSize: "16px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                transition: ".3s ease-in-out all",
            }}>
                <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "5px", padding: "10px", marginLeft: "10px"}}>
                    <a href = "../Login" style={Logout}>Login</a>
                </button>
                <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "5px", padding: "10px", marginLeft: "10px"}}>
                    <a href = "../Register" style={Logout}>Register</a>
                </button>
                <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "5px", padding: "10px", marginLeft: "10px"}}>
                    <a href='../Login' style={Logout}>Log out</a>
                </button>
            </div>
        </div>        
    </div>
    
  );
}

export default Top;
