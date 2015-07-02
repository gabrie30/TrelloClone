window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    boards = new TrelloClone.Collections.Boards();
    boards.fetch({
      success: function(){
        new TrelloClone.Routers.Router({boards: boards, $rootEl: $("div #main")});
        Backbone.history.start();
      }.bind(this)
    });
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
