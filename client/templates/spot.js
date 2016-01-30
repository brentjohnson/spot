Meteor.subscribe('animals');

Template.animaltable.helpers({
  animals: function () {
    return Animals;
  },
      settings: function () {
        return {
            collection: Animals,
            rowsPerPage: 10,
            showFilter: true,
            fields: ['Coordinator', 'Name of Foster', 'Dog\'s Name']
        };
    }
});

