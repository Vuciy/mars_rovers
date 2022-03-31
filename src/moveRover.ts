import IMoveRover from "./interfaces/IMoveRover";

function MoveRover(data: IMoveRover): IMoveRover {
    switch (data.direction) {
        case 'N':
            data.y = data.y + 1;
            break;
        case 'W':
            data.x = data.x - 1;
            break;
        case 'S':
            data.y = data.y - 1;
            break;
        case 'E':
            data.x = data.x + 1
    }

    if (data.y < 0) {
        data.y = 0
    }

    if (data.x < 0) {
        data.x = 0
    }

    return data;
}

export default MoveRover;