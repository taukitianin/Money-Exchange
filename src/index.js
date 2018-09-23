// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let m = {};
    while(currency > 0){
        if(currency>=50) {
            m.H = Math.floor(currency/50);
            currency = currency%50;
        }
        else if(currency>=25) {
            m.Q = Math.floor(currency/25);
            currency = currency%25;
        }else if(currency>=10) {
            m.D = Math.floor(currency/10);
            currency = currency%10;
        }else if(currency>=5){
            m.N = Math.floor(currency/5);
            currency = currency%5;
        }else if(currency>=1){
            m.P = Math.floor(currency);
            currency = 0
        }

    }

    return m;

}
