import Rover from './rover';

test('Should output valid directions', () => {
    const roverDirections = Rover('1 2 N', 'LMLMLMLMM');
    expect(roverDirections).toBe('1 3 N');
})