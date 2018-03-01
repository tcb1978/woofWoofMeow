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

test('verify monday value is correct', () => {
    expect(woofwalks.checkMonday(false)).toBe(true)
})

test('verify tuesday value is correct', () => {
    expect(woofwalks.checkTuesday(true)).not.toBe(false)
})

test('verify wenesday value is correct', () => {
    expect(woofwalks.checkWednesday(5)).toBe(3)
})

test('verify thursday value is correct', () => {
    expect(woofwalks.checkThursday(5)).toBe(4)
})

test('verify friday value is correct', () => {
    expect(woofwalks.checkFriday(6)).toBe(5)
})

test('verify saturday value is correct', () => {
    expect(woofwalks.checkSaturday(7)).toBe(6)
})

test('verify sunday value is correct', () => {
    expect(woofwalks.checkSunday(true)).not.toBe(false)
})