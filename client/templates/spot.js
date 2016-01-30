Meteor.subscribe('animals');

Template.body.helpers({
  animals: function () {
    return Animals.find({});
  }
});

Template.animal.helpers({
  name: function () {
    return this['Dog\'s Name'];
  }
})