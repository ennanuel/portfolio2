import { v4 as uuidv4 } from 'uuid';

const maxBoxInAContainer = 4;

function createBoxContainer(num) {
    const rand = Math.round(Math.random());
    if(rand === 0 || num < 1) {
        const randomNumber = (Math.random() * 3).toFixed(1);
        const animationDelay = `${randomNumber}s`;
        const key = uuidv4();
        const Box = <div key={key} className="content" style={{ animationDelay }}></div>;
        return Box;
    } else {
        const backgroundBoxes = [];
        const key = uuidv4();
        for (let i = 0; i < maxBoxInAContainer; i++) {
            backgroundBoxes.push(createBoxContainer(num - 1))
        };
        const boxContainer = <div key={key} className="box">{backgroundBoxes}</div>;
        return boxContainer;
    };
};

export function createBackgroundBoxes(squareDimension) {;
    let backgroundBoxes = [];
    const boxStyle = { width: squareDimension, height: squareDimension };
    for(let k = 0; k < maxBoxInAContainer; k++) {
        const containers = [];
        const key = uuidv4();
        for (let i = 0; i < maxBoxInAContainer; i++) {
            containers.push(createBoxContainer(3))
        };
        const backgroundBox = <div key={key} style={boxStyle} className="box-container">{containers}</div>;
        backgroundBoxes.push(backgroundBox);
    }
    return backgroundBoxes;
};