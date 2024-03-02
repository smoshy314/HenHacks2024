export interface AccessLoc{
    /* Each location can have multiple tags
    wheelchair accessible: wheelchar_acc, gender inclusive: gender_inc, transportation: transportation*/
    tags: string[],
    /* name of the location. eg: gore-front-ramp */
    name:string,
    /* coordinates of the location */
    coords: number[],
    /* which building on campus this is located in */
    location: string,
    /* type of */
    type: "ramp"| "bathroom" | "bus Stop" | "elevator",
    descr: string
}
