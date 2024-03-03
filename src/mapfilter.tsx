import { AccessLoc, LocType } from "./Interfaces/accessloc";
import accessLocsAll from "./data/AllAccessLocs.json";

export const accessLocList: AccessLoc[] = accessLocsAll;

/*--------------------------------TYPE FILTERS----------------------------------- */
//filters through list of all accessibility locations and find ones of type ramp
export const rampTypeLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.type === "ramp");

//filters through list of all accessibility locations and find ones of type bathroom
export const brTypeLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.type === "bathroom");

//filters through list of all accessibility locations and find ones of type bus Stop
export const busTypeLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.type === "bus Stop");

//filters through list of all accessibility locations and find ones of type elevator
export const elTypeLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.type === "elevator");


/*--------------------------------TAG FILTERS----------------------------------- */
//filters through list of all accessibility locations and returns those tagged wheelchair_acc
export const wheelchairTagLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.tags.includes("wheelchair_acc"));

//filters through list of all accessibility locations and returns those tagged gender_inc
export const genderIncTagLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.tags.includes("gender_inc"));

//filters through list of all accessibility locations and returns those tagged transportation
export const transportTagLocs: AccessLoc[] = accessLocList.filter((al: AccessLoc) => al.tags.includes("transportation"));


 
