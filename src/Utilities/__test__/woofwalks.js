module.exports = {
    timeConvertion: function (time) {
        var hours = parseInt(time.substr(0, 2));
        if (time.indexOf('am') != -1 && hours == 12) {
            time = time.replace('12', '0');
        }
        if (time.indexOf('pm') != -1 && hours < 12) {
            time = time.replace(hours, (hours + 12));
        }
        return time.replace(/(am|pm)/, '');
    },

    isUserCaregiver(user) {
        let title = user.title
        if( title !== 'caregiver' ) {
            return false
        }
    },

    isUserPetOwner(user) {
        let title = user.title
        if (title !== 'petowner') {
            return false
        }
    }
}