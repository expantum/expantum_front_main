const TIMER_BODY = document.querySelector('.mint-countdown_container .mint-countdown_timer-body');

function convert(val) {
    return (val < 10 ? '0' : '') + val;
}

function init() {
    if (!TIMER_BODY) return;

    const Countdown = require('countdown-js');
    const dayjs = require('dayjs');
    dayjs.extend(require('dayjs/plugin/utc'));

    const DAYS_CELL = TIMER_BODY.querySelector('.cell.days .val');
    const HOURS_CELL = TIMER_BODY.querySelector('.cell.hours .val');
    const MINUTES_CELL = TIMER_BODY.querySelector('.cell.minutes .val');
    const SECONDS_CELL = TIMER_BODY.querySelector('.cell.seconds .val');

    Countdown.timer(
        dayjs.utc('2022-01-26T16:00:00.000Z').local().toDate(),
        function (timeLeft) {
            DAYS_CELL.innerHTML = convert(timeLeft.days);
            HOURS_CELL.innerHTML = convert(timeLeft.hours);
            MINUTES_CELL.innerHTML = convert(timeLeft.minutes);
            SECONDS_CELL.innerHTML = convert(timeLeft.seconds);
        },
        function () {
            DAYS_CELL.innerHTML = convert(0);
            HOURS_CELL.innerHTML = convert(0);
            MINUTES_CELL.innerHTML = convert(0);
            SECONDS_CELL.innerHTML = convert(0);
        }
    );
}

export default init;
