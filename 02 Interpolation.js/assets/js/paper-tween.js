var Base = paper.Base,
    Item = paper.Item;

Item.inject(Base.each(['to', 'from', 'fromTo'], function(name) {
    this['tween' + Base.capitalize(name)] = function(duration, properties) {
        var target = this,
            tween = TweenMax[name](target, duration, properties);

        tween.then = function(callback) {
            return this.eventCallback('onComplete', function() {
                callback.call(target, this);
            });
        };

        return tween;
    };
}, {}));

TweenMax.ticker.addEventListener('tick', function() {
    if (paper && paper.view) {
        paper.view.update();
    }
});
