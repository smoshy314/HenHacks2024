import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Map from '../components/map';
import locData from '../data/AllAccessLocs.json';

export function DisplayMap(): JSX.Element {
    const [isNeedUpdate, setIsNeedUpdate] = useState(true);
    const [locDataState, setLocDataState] = useState(locData);

    function testAddressAdd(){
        const test = locData.concat({
          "tags": ["transportation", "wheelchair_acc"],
          "name": "Perkins bus stop",
          "coords": [39.679049004049126, -75.75219277353854],
          "location": "Perkins Student Center",
          "type": "bus stop",
          "descr": "A bus stop for all students at the Perkins Student Center"   
        });
        setLocDataState(test);
        setIsNeedUpdate(true);
     }
    return (
        <div className="DisplayMap">
            <Map locData={locDataState}
                 isNeedUpdate={isNeedUpdate}
                 setIsNeedUpdate={setIsNeedUpdate}></Map>
            <Button onClick={testAddressAdd}>Add Marker</Button>
        </div>
    );
}