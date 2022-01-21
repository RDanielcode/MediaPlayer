var BitcoinPrice = /** @class */ (function () {
    function BitcoinPrice() {
        var _this = this;
        this.observers = [];
        var el = document.querySelector('#value');
        el.addEventListener('input', function () {
            _this.notify(el.value);
        });
    }
    BitcoinPrice.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        console.log(this.observers);
    };
    BitcoinPrice.prototype.unsubscribe = function (observer) {
        var index = this.observers.findIndex(function (obs) {
            return obs === observer;
        });
        console.log(this.observers);
        this.observers.splice(index, 1);
    };
    BitcoinPrice.prototype.notify = function (data) {
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return BitcoinPrice;
}());
var DisplayPrice = /** @class */ (function () {
    function DisplayPrice() {
        this.el = document.querySelector('#price');
    }
    DisplayPrice.prototype.update = function (data) {
        this.el.innerText = data;
    };
    return DisplayPrice;
}());
var value = new BitcoinPrice();
var display = new DisplayPrice();
value.subscribe(display);
setTimeout(function () { return value.unsubscribe(display); }, 5000);
