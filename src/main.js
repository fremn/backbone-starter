// var DrinkView = Backbone.View.extend({
//   initialize: function(options){
//   	this.name = options.name
//   },
//   render: function () {
//     console.log('You should drink', this.name);
//   }
// });

// var sprite = new DrinkView({
//   name: 'Sprite'
// });
// sprite.render();

// var water = new DrinkView({
//   name: 'Water'
// });
// water.render();
// 2
// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button>I don\'t do anything :(</button>');
//   }
// });

// var view = new ButtonView({
// 	el: $('.display')
// });
// view.render();

// 3

var ButtonView = Backbone.View.extend({
  render: function () {
    $(this.el).html('new shtuff');
  }
});

var view = new ButtonView({
  el: $('.big-button')
});
view.render();

// 4

var stockTemplate = _.template('<b><%= name %>:</b> <%= price %>');

var StockView = Backbone.View.extend({
  initialize: function (options) {
    this.name = options.name;
    this.price = options.price;
    this.options = options
  },

  render: function () {
    $(this.el).html(stockTemplate(this.options));
  }
});

var aapl = new StockView({
  name: 'AAPL',
  price: 380,
  el: $('.stock-price:eq(0)')
});
var goog = new StockView({
  name: 'GOOG',
  price: 800,
  el: $('.stock-price:eq(1)')
});
aapl.render();
goog.render();





