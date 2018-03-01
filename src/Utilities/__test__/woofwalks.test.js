const woofwalks = require('./woofwalks');

test('Time convertion', () => {
    expect(woofwalks.timeConvertion('4:00 pm')).toBe('16:00 ');
})

test('Time convertion', () => {
    expect(woofwalks.timeConvertion('4:00 am')).toBe('4:00 ' );
})

test('Time convertion', () => {
    expect(woofwalks.timeConvertion('10:30 pm')).toBe('22:30 ');
})