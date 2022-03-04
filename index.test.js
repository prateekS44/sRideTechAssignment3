const {calculateMinimumNumberOfFlips, flip, replaceCharacterAtPosition} = require('./index');

test('flip', () => {
    const string = '---+++'
    const resultingString1 = flip(string,0,0);
    expect(resultingString1).toBe('+--+++');
    const resultingString2 = flip(string,2,2);
    expect(resultingString2).toBe('--++++');
    const resultingString3 = flip(string,0,2);
    expect(resultingString3).toBe('++++++');
});

test('replaceCharacterAtPosition', () => {
    const string = '---+++'
    const resultingString1 = replaceCharacterAtPosition(string, 1, '+');
    expect(resultingString1).toBe('-+-+++');
    const resultingString2 = replaceCharacterAtPosition(string, 3, '-');
    expect(resultingString2).toBe('----++');
});

test('calculateMinimumNumberOfFlips', () => {
    const result1 = calculateMinimumNumberOfFlips('---+-++-', 3);
    expect(result1).toBe(3);
    const result2 = calculateMinimumNumberOfFlips('+++++', 4);
    expect(result2).toBe(0);
    const result3 = calculateMinimumNumberOfFlips('-+-+-', 4);
    expect(result3).toBe("IMPOSSIBLE");
    const result4 = calculateMinimumNumberOfFlips('abcdef', 4);
    expect(result4).toBe(-1);
})