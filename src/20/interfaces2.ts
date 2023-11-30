interface TakePhoto{
    cameraMode: string,
    filter: string,
    burst: number,
}

interface Story {
    createStory(): void
}
/* implements clause can be used to verify that a class 
conforms to a specific interface. If a class fails to 
implement an interface correctly, an error will be 
generated. Classes can implement a single interface or 
multiple interfaces at once.*/

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: number
    ){}

    createStory(): void {
        console.log("story")
    }
}