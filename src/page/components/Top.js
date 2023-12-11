import React from 'react';
import Button from './ButtonTop'
function Top() {
  return (
    <div style={{
        marginLeft: "50px"
    }}>
        <div className="d-flex align-items-center pt-2 pb-2">
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

                <Button isSelected={false} style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
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
        </div>
    </div>
  );
}

export default Top;
