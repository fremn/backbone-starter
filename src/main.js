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

var ButtonView = Backbone.View.extend({
  render: function () {
    $(this.el).html('<button>I don\'t do anything :(</button>');
  }
});

var view = new ButtonView({
	el: $('.display')
});
view.render();
