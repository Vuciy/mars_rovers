function RotateLeft(roverDirection) {
    switch (roverDirection) {
        case 'N':
            return 'W';
        case 'W':
            return 'S';
        case 'S':
            return 'E';
        case 'E':
            return 'N'
        default:
            throw new Error('Invalid rotation direction')
    }
}

export default RotateLeft;