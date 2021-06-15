//import MKY08 from "../TCP-Server/models/mky08.js";
import MKY021 from "./models/mky021.js";
import MKY08 from "./models/mky08.js";

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = {
        date: date,
        month: month,
        year: year,
        hour: (hour),
        min: min,
        sec: sec
    };
    return time;
  }

export default {

    saveRig21: (timestamp) => {

        let postCalculations = {
            
            // DATA CALCULATIONS
            engineRpm: Math.random(6) * 100,
            oilPressure: Math.random(6) * 100,
            engineHours: Math.random(6) * 100,
            coolantTemp: Math.random(6) * 100,
            headPosition: Math.random(6) * 100,
            holeDepth: Math.random(6) * 100,
            rotationRpm: Math.random(6) * 100,
            penetrationRate: Math.random(6) * 100,
            mastAngle: Math.random(6) * 100,
            deckRoll: Math.random(6) * 100,
            deckPitch: Math.random(6) * 100,
            headRackBackProxyStatus: Math.random(6) * 100,
            footClampPressureSwitch: Math.random(6) * 100,
            coolantLevelSensor: Math.random(6) * 100,
            rotationReversePressure: Math.random(6) * 100,
            rotationForwardPressure: Math.random(6) * 100,
            holdBackPressure: Math.random(6) * 100,
            pulldownPressure: Math.random(6) * 100,
            waterPressure: Math.random(6) * 100,
            mainPumpPressure: Math.random(6) * 100,
            winchDownPressure: Math.random(6) * 100,
            winchUpPressure: Math.random(6) * 100,
            bitWeight: Math.random(6) * 100,
            driller: "Not Signed in"
        }
        console.log(timestamp)
        MKY021.create({
            ts: postCalculations.ts,
            engineRpm: postCalculations.engineRpm,
            oilPressure: postCalculations.oilPressure,
            engineHours: postCalculations.engineHours,
            coolantTemp: postCalculations.coolantTemp,
            headPosition: postCalculations.headPosition,
            holeDepth: postCalculations.holeDepth,
            rotationRpm: postCalculations.rotationRpm,
            penetrationRate: postCalculations.penetrationRate,
            mastAngle: postCalculations.mastAngle,
            deckRoll: postCalculations.deckRoll,
            deckPitch: postCalculations.deckPitch,
            headRackBackProxyStatus: postCalculations.headRackBackProxyStatus,
            footClampPressureSwitch: postCalculations.footClampPressureSwitch,
            coolantLevelSensor: postCalculations.coolantLevelSensor,
            rotationReversePressure: postCalculations.rotationReversePressure,
            rotationForwardPressure: postCalculations.rotationForwardPressure,
            holdBackPressure: postCalculations.holdBackPressure,
            pulldownPressure: postCalculations.pulldownPressure,
            waterPressure: postCalculations.waterPressure,
            mainPumpPressure: postCalculations.mainPumpPressure,
            winchDownPressure: postCalculations.winchDownPressure,
            winchUpPressure: postCalculations.winchUpPressure,
            bitWeight: postCalculations.bitWeight,
            driller: postCalculations.driller || "IN",
            year: timeConverter(timestamp).year,
            month: timeConverter(timestamp).month,
            date: timeConverter(timestamp).date,
            hour: timeConverter(timestamp).hour,
            minute: timeConverter(timestamp).min,
            second: timeConverter(timestamp).sec
        }).then(() => console.log("Log Created"));

    },

    saveRig8: (timestamp) => {

        let postCalculations = {
            
            // DATA CALCULATIONS
            engineRpm: Math.random(6) * 100,
            oilPressure: Math.random(6) * 100,
            engineHours: Math.random(6) * 100,
            coolantTemp: Math.random(6) * 100,
            headPosition: Math.random(6) * 100,
            holeDepth: Math.random(6) * 100,
            rotationRpm: Math.random(6) * 100,
            penetrationRate: Math.random(6) * 100,
            bitWeight: Math.random(6) * 100,
            outsideTemp: Math.random(6) * 100,
            mastAngle: Math.random(6) * 100,
            deckRoll: Math.random(6) * 100,
            deckPitch: Math.random(6) * 100,
            rodLoaderPosition: false,
            headRefPosition: false,
            rotationReversePressure: Math.random(6) * 100,
            rotationForwardPressure: Math.random(6) * 100,
            holdBackPressure: Math.random(6) * 100,
            pulldownPressure: Math.random(6) * 100,
            waterPressure: Math.random(6) * 100,
            mainPumpPressure: Math.random(6) * 100,
            driller: Math.random(6) * 100,
            compressorSumpPressure: Math.random(6) * 100,
            compressorDischargeTemperature: Math.random(6) * 100,
            compressorLinePressure: Math.random(6) * 100,
            compressorInterstagePressure: Math.random(6) * 100,
            DownholeAirPressure: Math.random(6) * 100,
            engineOilTemp: Math.random(6) * 100,
            engineTorque: Math.random(6) * 100,
            intercoolerTemp: Math.random(6) * 100,
            totalFuelUsed: Math.random(6) * 100,
            intakeManifoldTemp: Math.random(6) * 100,
            turboRpm: Math.random(6) * 100,
            electricalPotential: Math.random(6) * 100,
            engineOilLevel: Math.random(6) * 100,
            driller: "Not Signed in",
            timestamp: Math.random(6) * 100,
        }

        MKY08.create({
            time: postCalculations.timestamp,
            engineRPM: postCalculations.engineRpm,
            oilPressure: postCalculations.oilPressure,
            engineHours: postCalculations.engineHours,
            coolantTemp: postCalculations.coolantTemp,
            headPosition: postCalculations.headPosition,
            holeDepth:  postCalculations.holeDepth,
            rotationRpm: postCalculations.rotationRpm,
            penetrationRate: postCalculations.penetrationRate,
            bitWeight: postCalculations.bitWeight,
            outsideTemp: postCalculations.outsideTemp,
            mastAngle: postCalculations.mastAngle,
            deckRoll: postCalculations.deckRoll,
            deckPitch: postCalculations.deckPitch,
            rodLoaderPosition: postCalculations.rodLoaderPosition,
            headRefPosition: postCalculations.headRefPosition,
            rotationReversePressure: postCalculations.rotationReversePressure,
            rotationForwardPressure: postCalculations.rotationForwardPressure,
            holdBackPressure: postCalculations.holdBackPressure,
            pulldownPressure: postCalculations.pulldownPressure,
            waterPressure: postCalculations.waterPressure,
            mainPumpPressure: postCalculations.mainPumpPressure,
            driller: postCalculations.driller,
            compressorDischargeTemperature: postCalculations.compressorDischargeTemperature,
            compressorLinePressure: postCalculations.compressorLinePressure,
            compressorInterstagePressure: postCalculations.compressorInterstagePressure,
            DownholeAirPressure: postCalculations.DownholeAirPressure,
            engineOilTemp: postCalculations.engineOilTemp,
            engineTorque: postCalculations.engineTorque,
            intercoolerTemp: postCalculations.intercoolerTemp,
            totalFuelUsed: postCalculations.totalFuelUsed,
            intakeManifoldTemp: postCalculations.intakeManifoldTemp,
            turboRpm: postCalculations.turboRpm,
            electricalPotential: postCalculations.electricalPotential,
            engineOilLevel: postCalculations.engineOilLevel,
            year: timeConverter(timestamp).year,
            month: timeConverter(timestamp).month,
            date: timeConverter(timestamp).date,
            hour: timeConverter(timestamp).hour,
            minute: timeConverter(timestamp).min,
            second: timeConverter(timestamp).sec
        }).then(() => console.log("Log Created"));

    }

}