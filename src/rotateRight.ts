function RotateRight(roverDirection): string {
    switch (roverDirection) {
        case 'N':
            return 'E';
        case 'E':
            return 'S';
        case 'S':
            return 'W';
        case 'W':
            return 'N'
        default:
            throw new Error('Invalid rotation direction')
    }
}

export default RotateRight;