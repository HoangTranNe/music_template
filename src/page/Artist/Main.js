import React, { useEffect, useState } from 'react';
import Top from "../components/Top";
function Artist() {

    return (
        <div>
            <div style={{
                marginLeft: "220px"                        
            }}>
                <Top/> 
            </div>
            <div className="Frame295" style={{
                width: 1032, height:"100%", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex',
                marginLeft: '300px'
                }}>
                <div className="RecentSearches" style={{width: 1032, height: 254, position: 'relative'}}>
                    <div className="RecentSearches" style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Recent searches</div>
                    <div className="SeeAll" style={{left: 990, top: 22, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Circular Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: 12, letterSpacing: 0.60, wordWrap: 'break-word'}}>See all</div>
                    <div className="Frame282" style={{width: 1032, height: 202, left: 0, top: 52, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 72, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Beyonce</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 80, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Cardi B</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 57, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Diana Ross</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{width: 128, paddingRight: 90, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Usher</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 47, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Charlie Puth</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 44, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Marvin Gaye</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 49, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Artist Name</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    <div className="MainMainContent" style={{width: 152, height: 202, position: 'relative', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 4, overflow: 'hidden'}}>
                        <img className="Ellipse9" style={{width: 128, height: 128, left: 12, top: 12, position: 'absolute', boxShadow: '0px 8px 16px -8px rgba(25, 20, 20, 0.80)', borderRadius: 9999}} src="https://via.placeholder.com/128x128" />
                        <div className="Frame280" style={{paddingRight: 49, left: 12, top: 152, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="ArtistName" style={{color: 'white', fontSize: 14, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Artist Name</div>
                        </div>
                        <div className="Frame281" style={{width: 128, paddingRight: 97, left: 12, top: 172, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div className="Artist" style={{color: '#B2B2B2', fontSize: 12, fontFamily: 'Circular Std', fontWeight: '400', lineHeight: 14, wordWrap: 'break-word'}}>Artist</div>
                        </div>
                        <div className="X" style={{width: 16, height: 16, left: 132, top: 4, position: 'absolute'}}>
                        <div className="Ellipse4" style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0.60, background: 'black', borderRadius: 9999}} />
                        <img className="Union" style={{width: 8, height: 8, left: 4, top: 4, position: 'absolute'}} src="https://via.placeholder.com/8x8" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="YourTopGenres" style={{height: 218, position: 'relative'}}>
                    <div className="YourTopGenres" style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Your top genres</div>
                    <div className="Frame283" style={{width: 1032, height: 162, left: 0, top: 56, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#E8115B', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Hip Hop</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Electronic</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#F037A5', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Alternative</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#509BF5', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Indie</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#27856A', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Funk</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#B2B2B2', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Retro</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#AF2896', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Reggae</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    <div className="MainMainContent" style={{width: 332, height: 162, position: 'relative', background: '#509BF5', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Genre01" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Genre 01</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 287, top: 77, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                    </div>
                    </div>
                </div>
                <div className="BrowseAll" style={{width: 1032, position: 'relative'}}>
                    <div className="BrowseAll" style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Browse all</div>
                    <div className="Frame286" style={{width: 1032, height: 612, left: 0, top: 56, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                    <div className="Frame284" style={{width: 1032, justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#AF2896', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Lounge</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#1D3164', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Blues</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#27856A', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Funk</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#B2B2B2', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Retro</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#477D95', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Latin</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#E13300', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Jazz</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                    </div>
                    <div className="Frame285" style={{width: 1032, justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#BA5D07', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Ambient</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#5F8109', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Cinematic</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#1DB954', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Fantasy</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#535353', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Pop</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>World</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#477D95', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Folk</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                        <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                        <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" />
                        </div>
                        </div>
                        <div className="Frame287" style={{width: 1032, justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#1DB954', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Hip Hop</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Hip Hop" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#AF2896', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Children</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Children" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#509BF5', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Lounge</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Lounge" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#1D3164', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Soul & RnB</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Soul & RnB" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#E8115B', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Rock</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Rock" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#5F8109', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Latin</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Latin" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            </div>
                            <div className="Frame286" style={{width: 1032, justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                            <div className="MainMainContent" style={{width: 152, height: 135, position: 'relative', background: '#55A891', borderRadius: 4, overflow: 'hidden'}}>
                                <div className="Podcasts" style={{left: 16, top: 12, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Circular Std', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Podcasts</div>
                                <img className="Rectangle239" style={{width: 80, height: 80, left: 107, top: 50, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/80x80" alt="Podcasts" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default Artist;
