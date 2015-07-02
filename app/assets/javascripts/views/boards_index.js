window.TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(options){
    this.board = options.board;
    this.boards = options.boards;
    this.listenTo(this.boards, "sync add", this.render);

  },

  template: JST["boardsIndex"],

  render: function(){

    var newBoard = new TrelloClone.Views.NewBoard({collection: this.boards});
    this.$el.html(newBoard.render().$el);

    var content = this.template({board: this.board});
    this.$el.append(content);

    this.boards.each(function(board){
      
      var indexItem = new TrelloClone.Views.BoardIndexItem({board: board});
      // this.$el.append(indexItem.render().el);
      this.$("#board_index").append(indexItem.render().el);

    }.bind(this));

    return this;
  },

});
