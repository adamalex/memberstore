var Backbone = require('backbone');

//
// Basic Backbone model, collection, and sample data
// Provides all underlying model logic for this example
//
var sampleData = [
	{ id: 1, first: 'Ian', last: 'Michaels', rank: 1 },
	{ id: 2, first: 'Dale', last: 'McConnor', rank: 2 },
	{ id: 3, first: 'Matt', last: 'Barnes', rank: 2 },
	{ id: 4, first: 'Adam', last: 'Anderson', rank: 3 },
	{ id: 5, first: 'Bryan', last: 'Karmichael', rank: 3 },
	{ id: 6, first: 'Bryan', last: 'Spencer', rank: 3 },
	{ id: 7, first: 'Dale', last: 'McConnor', rank: 3 },
	{ id: 8, first: 'Eric', last: 'James', rank: 3 },
	{ id: 9, first: 'Kevin', last: 'Peterson', rank: 3 },
	{ id: 10, first: 'Nathan', last: 'Carson', rank: 3 },
	{ id: 11, first: 'Ratul', last: 'Shon', rank: 3 },
	{ id: 12, first: 'Rick', last: 'Patterson', rank: 3 },
	{ id: 13, first: 'Rick', last: 'Warner', rank: 3 },
	{ id: 14, first: 'Tim', last: 'Kendall', rank: 3 }
];

var MemberModel = Backbone.Model.extend({
	promote: function () {
		this.set({ rank: this.get('rank') - 1 });
	},

	demote: function () {
		this.set({ rank: this.get('rank') + 1 });
	}
});

var MemberCollection = Backbone.Collection.extend({
	model: MemberModel,

	loadSampleData: function () {
		this.reset(sampleData);
		return this;
	}

});

module.exports = new MemberCollection();