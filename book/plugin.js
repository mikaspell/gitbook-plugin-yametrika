require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.yametrika = config.yametrika || {};
    });

    gitbook.events.bind("page.change", function() {
        var yaCounter"+config.number+" = new Ya.Metrika({id: "+config.number+"});
    });

    gitbook.events.bind("exercise.submit", function(e, data) {

    });
});
