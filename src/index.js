const chalk = require('chalk');

class Logger {
    constructor() {

    }
    /**
     * @param {string} warningText The text for the warning
     * @example
     * logger.warn('This is a warning')
     */

    warn(warningText) {
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        const year = d.getFullYear();
        day < 10 ? day = '0' + day : undefined;
        month < 10 ? month = '0' + month : undefined;
        hour < 10 ? hour = '0' + hour : undefined;
        min < 10 ? min = '0' + min : undefined;
        sec < 10 ? sec = '0' + sec : undefined;
        const date = `${day}-${month}-${year}`;
        const time = `${hour}:${min}:${sec}`;
        return console.log(`[${chalk.blue(`${date} ${time}`)}] ${chalk.yellow(`WARNING: ${warningText}`)}`);
    }

    /**
     * @param {string} errorText The text for the error
     * @example
     * logger.error('This is an error')
     */
    error(errorText) {
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        const year = d.getFullYear();
        day < 10 ? day = '0' + day : undefined;
        month < 10 ? month = '0' + month : undefined;
        hour < 10 ? hour = '0' + hour : undefined;
        min < 10 ? min = '0' + min : undefined;
        sec < 10 ? sec = '0' + sec : undefined;
        const date = `${day}-${month}-${year}`;
        const time = `${hour}:${min}:${sec}`;
        return console.log(`[${chalk.blue(`${date} ${time}`)}] ${chalk.red(`ERROR: ${errorText}`)}`);
    }

    /**
     * @param {string} successText The text for the success
     * @example
     * logger.success('This is a success')
     */
    success(successText) {
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        const year = d.getFullYear();
        day < 10 ? day = '0' + day : undefined;
        month < 10 ? month = '0' + month : undefined;
        hour < 10 ? hour = '0' + hour : undefined;
        min < 10 ? min = '0' + min : undefined;
        sec < 10 ? sec = '0' + sec : undefined;
        const date = `${day}-${month}-${year}`;
        const time = `${hour}:${min}:${sec}`;
        return console.log(`[${chalk.blue(`${date} ${time}`)}] ${chalk.green(`ERROR: ${successText}`)}`);
    }

    /**
     * @param {string} eventText The text for the event
     * @example
     * logger.event('This is an event')
     */
    event(eventText) {
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        const year = d.getFullYear();
        day < 10 ? day = '0' + day : undefined;
        month < 10 ? month = '0' + month : undefined;
        hour < 10 ? hour = '0' + hour : undefined;
        min < 10 ? min = '0' + min : undefined;
        sec < 10 ? sec = '0' + sec : undefined;
        const date = `${day}-${month}-${year}`;
        const time = `${hour}:${min}:${sec}`;
        return console.log(`[${chalk.blue(`${date} ${time}`)}] ${chalk.magenta(`EVENT: ${eventText}`)}`);
    }

    /**
     * @param {string} infoText The text for the info
     * @example
     * logger.info('This is an info')
     */
    info(infoText) {
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        const year = d.getFullYear();
        day < 10 ? day = '0' + day : undefined;
        month < 10 ? month = '0' + month : undefined;
        hour < 10 ? hour = '0' + hour : undefined;
        min < 10 ? min = '0' + min : undefined;
        sec < 10 ? sec = '0' + sec : undefined;
        const date = `${day}-${month}-${year}`;
        const time = `${hour}:${min}:${sec}`;
        return console.log(`[${chalk.blue(`${date} ${time}`)}] ${chalk.cyan(`EVENT: ${infoText}`)}`);
    }
}

module.exports = Logger;