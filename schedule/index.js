// https://www.npmjs.com/package/node-schedule

// 感觉使用挺方便的定时任务

const schedule = require('node-schedule');

const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('00 29 * * * *',()=>{
        console.log('scheduleCronstyle:' + new Date());
    }); 
}

scheduleCronstyle();