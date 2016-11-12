import { Template } from 'meteor/templating';

import { Cuptrees } from '../../api/cuptrees.js';

import './home.html';

Template.home.helpers({
  cuptree() {;
    return Cuptrees.findOne({username: "test"});
  },
  // cuptree: { cupsSaved: 1, cupsUsed: 3 },
});

Template.home.events({
  'click #use-cup'() {
    const cuptree = Cuptrees.findOne({username: "test"});
    Cuptrees.update(cuptree._id, { $set: { cupsUsed: cuptree.cupsUsed + 1 } });
  },
  'click #save-cup'() {
    const cuptree = Cuptrees.findOne({username: "test"});
    Cuptrees.update(cuptree._id, { $set: { cupsSaved: cuptree.cupsSaved + 1 } });
  },
});

