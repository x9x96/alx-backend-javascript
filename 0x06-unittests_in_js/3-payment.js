const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
}

module.exports = sendPaymentRequestToApi;
