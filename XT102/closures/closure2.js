let counter=(function() {
    let privateCounter = 0;

    function changeBy(value) {
        return privateCounter = privateCounter + value;
    }

    return {
        increment: function () {
            changeBy(1);
        },

        decrement: function () {
            changeBy(-1);
        },

        value: function () {
            return privateCounter;
        }
    }
})();




counter.increment();
counter.increment();

console.log(counter.value());

console.log(counter);