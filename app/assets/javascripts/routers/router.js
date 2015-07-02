window.TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.boards = options.boards;
    this.$rootEl = options.$rootEl;

  },

  routes: {
    "": "boardsIndex",
    "boards/:id": "showBoard"

  },

  showBoard: function(id) {
    // this.$rootEl.empty();
    var showView = new TrelloClone.Views.ShowBoard({model: this.boards.get(id)});
    this.$rootEl.html(showView.render().el);


  },

  boardsIndex: function() {
    // this.$rootEl.empty();
    var indexView = new TrelloClone.Views.BoardsIndex({boards: this.boards});
    this.$rootEl.html(indexView.render().el);

    // this.boards.each(function(board){
      
    //   var indexItem = new TrelloClone.Views.BoardIndexItem({board: board});
    //   this.$rootEl.append(indexItem.render().el);
    //   // $("ul #board_index").append(indexItem.render().el);

    // }.bind(this));

    // var newBoard = new TrelloClone.Views.NewBoard({collection: this.boards});
    // this.$rootEl.append(newBoard.render().$el);

  },


});