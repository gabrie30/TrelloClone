window.TrelloClone.Views.ShowBoard = Backbone.View.extend({
  // I thiink this is where we will initialize the cards, in the rendering of the
  // boards show...

  // I think we'll also need to pass in an ID or the Model
  events: {
    "submit form":"deleteBoard"
  },

  template: JST["showBoard"],

  deleteBoard: function(event) {
    event.preventDefault();
    this.model.destroy({
      success: function(){
        Backbone.history.navigate("", {trigger: true});
      }
    });
  },

  render: function() {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

});