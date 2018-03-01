module.exports = {
    timeConvertion: function (time) {
<<<<<<< HEAD
        
=======
>>>>>>> 0632d7d7aff715f0c07d24b1fa8689ded3607ced
        var hours = parseInt(time.substr(0, 2));
        if (time.indexOf('am') != -1 && hours == 12) {
            time = time.replace('12', '0');
        }
        if (time.indexOf('pm') != -1 && hours < 12) {
            time = time.replace(hours, (hours + 12));
        }
        return time.replace(/(am|pm)/, '');
    },

    checkMonday: function (monday) {
        monday = 1
        let date = new Date
        if (date != monday) {
            return true
        }
    },

    checkTuesday: function (tuesday) {
        tuesday = 2
        let date = new Date
        if (date != tuesday) {
            return true
        }
    },

    checkWednesday: function (wednesday) {
        wednesday = 3
        let date = new Date
        if (date != wednesday) {
            return wednesday
        }
    },

    checkThursday: function (Thursday) {
        Thursday = 4
        let date = new Date
        if (date != Thursday) {
            return Thursday
        }
    },

    checkFriday: function (Friday) {
        Friday = 5
        let date = new Date
        if (date != Friday) {
            return Friday
        }
    },

    checkSaturday: function (Saturday) {
        Saturday = 6
        let date = new Date
        if (date != Saturday) {
            return Saturday
        }
    },

    checkSunday: function (Sunday) {
        Sunday = 7
        let date = new Date
        if (date != Sunday) {
            return true
        }
    }
}