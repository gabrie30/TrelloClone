window.TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  
  initialize: function(options){
    this.board = options.board;
  },

  template: JST["boardIndexItem"],

  render: function(){
    var content = this.template({board: this.board});
    this.$el.html(content);
    return this;
  },

});