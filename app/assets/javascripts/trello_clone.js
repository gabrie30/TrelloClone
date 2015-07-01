window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch({
      success: function() {
        console.log(this);
      }.bind(this)
    });
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
