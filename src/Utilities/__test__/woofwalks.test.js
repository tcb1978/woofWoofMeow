const woofwalks = require('./woofwalks');

test('updates Monday state params', () => {
    expect(woofwalks.handleMondayChange({ 
        user_id: 1 ,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(1, 1, '2am-6pm');
});

test('updates Tuesday state params', () => {
    expect(woofwalks.handleTuesdayChange({
        user_id: 1,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(2, 2, '2am-6pm');
});

test('updates Wednesday state params', () => {
    expect(woofwalks.handleWednesdayChange({
        user_id: 1,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(3, 3, '2am-6pm');
});

test('updates Thursday state params', () => {
    expect(woofwalks.handleThursdayChange({
        user_id: 1,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(4, 4, '2am-6pm');
});

test('updates Friday state params', () => {
    expect(woofwalks.handleFridayChange({
        user_id: 1,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(5, 5, '2am-6pm');
});

test('updates Saturday state params', () => {
    expect(woofwalks.handleSaturdayChange({
        user_id: 1,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(6, 6, '2am-6pm');
});

test('updates Sunday state params', () => {
    expect(woofwalks.handleSundayChange({
        user_id: 1,
        day: 0,
        time_range: '6am-2pm'
    })).toBe(7, 7, '2am-6pm');
});