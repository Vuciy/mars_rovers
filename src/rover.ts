import IMoveRover from './interfaces/IMoveRover';
import MoveRover from './moveRover';
import RotateLeft from './rotateLeft';
import RotateRight from './rotateRight';

function Rover(directions: string, commands: string): string {

    try {
        let roverPosition: IMoveRover = {
            x: 0,
            y: 0,
            direction: 'N'
        }
        const directionsArray = directions.split(' ');
        if (directionsArray && directionsArray.length === 3) {
            roverPosition.x = Number(directionsArray[0]);
            roverPosition.y = Number(directionsArray[1]);
            roverPosition.direction = directionsArray[2];
        } else {
            return 'Wrong directions format';
        }

        const commandsArray = commands.split('');

        for (const command of commandsArray) {
            if (command.toLocaleUpperCase() === 'L') {
                roverPosition.direction = RotateLeft(roverPosition.direction);
            }
            if (command.toLocaleUpperCase() === 'R') {
                roverPosition.direction = RotateRight(roverPosition.direction);
            }

            if (command.toLocaleUpperCase() === 'M') {
                roverPosition = MoveRover(roverPosition);
            }
        }

        return `${roverPosition.x} ${roverPosition.y} ${roverPosition.direction}`;
    } catch (error) {
        return error.message;
    }

}

export default Rover;