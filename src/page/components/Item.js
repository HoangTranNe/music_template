import React from 'react';

function Item(url, title, datetime){
    return (
        <div className="p-4 ps-0 pe-0 me-4" style={{backgroundColor: "#181818", overflow: "hidden", width: "300px"}}>
                                <div className="ms-4 me-4" style={{overflow: "hidden"}}>
                                    <img src={url} width="100%"/>
                                    <div className="text-white fw-bold mt-3 fs-4" style={{width: "1000px"}}>
                                        {title}
                                    </div>
                                    <div style={{color: "#B3B3B3", fontSize: "17px"}} className="mt-1 mb-4">
                                        {datetime}
                                    </div>
                                </div>
                            </div>
      );
}

export default Item;