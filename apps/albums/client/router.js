App.Routers.AlbumsRouter = Backbone.Router.extend({

   routes: {
      "": "userSelection",
      "user/:userId/albums": "albumsListView",
      "user/:userId/albums/:albumId" : "albumImages"
   },

   userSelection: function() {
      App.Factories.albumFactory.showUserSelection();
   },

   albumsListView: function(userId){
      App.Factories.albumFactory.showAlbumList(userId);
   },

   albumImages: function(userId, albumId){
      App.Factories.albumFactory.showAlbumImages(userId, albumId);
   }
});

//marionette initializers are guaranteed to run only after the application is started
App.Marionette.addInitializer(function() {
   App.Routers.albumsRouter = new App.Routers.AlbumsRouter();
});
