window.TrelloClone.Views.NewBoard = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.collection, "sync add", this.render);
  },
  
  events: {
    "click #new_board_form":"createNewBoard"
  },

  template: JST["createNewBoard"],

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNewBoard: function(event) {
  event.preventDefault();
    
   var newBoard = new TrelloClone.Models.Board();
   newBoard.set("title", $("#title").val());
   newBoard.save({},{
      success: function() {
        this.collection.add(newBoard);
        Backbone.history.navigate(("#/boards/" + newBoard.get("id")), {trigger: true});
      }.bind(this)
   });

  },

});