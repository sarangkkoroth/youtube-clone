import React from 'react'
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage_filter">
                <h2>FILTER</h2>

        
                


            </div>
            <hr/>
            <VideoRow
        title="FilterCopy | Every Family Video Call | Ft. Veer Rajwant, Eisha Chopra, Renuka Shahane & Shishir" 
        views="3617k Views"
        timestamp="2 days ago" 
        description="abc"
       channel="FilterCopy "
        image="https://i.ytimg.com/an_webp/A_taMibtou4/mqdefault_6s.webp?du=3000&sqp=CMCGqfoF&rs=AOn4CLCaGOvE4Nbi-GcSjsn39xVGqMLBRQ"
       
        ></VideoRow>
            
        </div>
    )
}

export default SearchPage
