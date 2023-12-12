import React from "react";
const FooterGuest = () => {
    return(
       <div style={{
            display: 'fixed',
            marginLeft: '266px',            
       }}>
         <div style={{
                width: '100%', 
                height: 67.78, 
                background: '#181818', 
                borderTop: '1px #282828 solid', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 66.78, paddingTop: 11, paddingBottom: 7.39, paddingLeft: 15, paddingRight: 24, background: 'linear-gradient(90deg, #AF2896 0%, #509BF5 100%)', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 611.06, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', paddingBottom: 0.59, paddingRight: 36.12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: 19.20, letterSpacing: 1.20, wordWrap: 'break-word'}}>Preview of Spotify</div>
                <div style={{color: 'white', fontSize: 15, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
            </div>
            <div style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 34, paddingRight: 33.81, background: 'white', borderRadius: 500, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Helvetica Neue', fontWeight: '700', wordWrap: 'break-word'}}>Sign up free</div>
            </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 1, paddingLeft: 1327, paddingRight: 20, justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', background: 'rgba(255, 255, 255, 0.30)', borderRadius: 2, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 93, height: 4, position: 'relative', borderRadius: 2, overflow: 'hidden'}}>
                <div style={{width: 93, height: 4, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 2}} />
                </div>
            </div>
            </div>
        </div>
       </div>
    );
}
export default FooterGuest;