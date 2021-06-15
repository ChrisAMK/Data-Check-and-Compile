import db from "./models/index.js";
import API from "./API.js";

const syncModels = async () => {
    // db.MKY021.sync();
    // db.MKY021RAW.sync();
    // db.MKY08.sync();
    // db.MKY08RAW.sync();
    db.AVAILABILITY.sync();
}

const loopTables = async () => {
    const a = new Date(Date.now());
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    console.log(year, month, date, hour, min, sec);
    //const recordsCreated = 0;
    for (let m = 5; m < 12; m++) {
        for (let d = 1; d < 32; d++) {
            let dailyArray8 = [];
            let dailyArray21 = [];
            for (let h = 0; h < 24; h++) {
                await db.MKY08.findAll({
                    attributes: ['date'],
                    limit: 1,
                    where: {
                        year: year,
                        month: months[m],
                        date: d,
                        hour: h,
                    },
                }).then((result) => {
                    if (!result[0]) {
                        dailyArray8.push(false);
                    } else {
                        dailyArray8.push(true);
                    }
                })
                    .catch(error => console.log(error))

                await db.MKY021.findAll({
                    attributes: ['date'],
                    limit: 1,
                    where: {
                        year: year,
                        month: months[m],
                        date: d,
                        hour: h,
                    },
                }).then((result) => {
                    if (!result[0]) {
                        dailyArray21.push(false);
                    } else {
                        dailyArray21.push(true);
                    }
                })
                    .catch(error => console.log(error))
            }
            db.AVAILABILITY.create({
                date: new Date(2021, m, d),
                asset: "rig08",
                0: dailyArray8[0],
                1: dailyArray8[1],
                2: dailyArray8[2],
                3: dailyArray8[3],
                4: dailyArray8[4],
                5: dailyArray8[5],
                6: dailyArray8[6],
                7: dailyArray8[7],
                8: dailyArray8[8],
                9: dailyArray8[9],
                10: dailyArray8[10],
                11: dailyArray8[11],
                12: dailyArray8[12],
                13: dailyArray8[13],
                14: dailyArray8[14],
                15: dailyArray8[15],
                16: dailyArray8[16],
                17: dailyArray8[17],
                18: dailyArray8[18],
                19: dailyArray8[19],
                20: dailyArray8[20],
                21: dailyArray8[21],
                22: dailyArray8[22],
                23: dailyArray8[23],
            }).then((result) => {
                console.log(result.dataValues)
                //recordsCreated =+ 1;
            })

            db.AVAILABILITY.create({
                date: new Date(2021, m, d),
                asset: "rig21",
                0: dailyArray21[0],
                1: dailyArray21[1],
                2: dailyArray21[2],
                3: dailyArray21[3],
                4: dailyArray21[4],
                5: dailyArray21[5],
                6: dailyArray21[6],
                7: dailyArray21[7],
                8: dailyArray21[8],
                9: dailyArray21[9],
                10: dailyArray21[10],
                11: dailyArray21[11],
                12: dailyArray21[12],
                13: dailyArray21[13],
                14: dailyArray21[14],
                15: dailyArray21[15],
                16: dailyArray21[16],
                17: dailyArray21[17],
                18: dailyArray21[18],
                19: dailyArray21[19],
                20: dailyArray21[20],
                21: dailyArray21[21],
                22: dailyArray21[22],
                23: dailyArray21[23],
            }).then((result) => {
                console.log(result.dataValues)
            })

        }

    }

}

syncModels().then(() => {

    // let timer = setInterval(() => {
    //     // let timeStamp = + new Date()
    //     // API.saveRig21(timeStamp);
    //     // API.saveRig8(timeStamp);
    //     console.log("Entered");
    // }, 1000);

    loopTables()

    // return () => {
    //     clearInterval(timer)
    // }

});
