var thrift = require('thrift');
var _ = require('underscore');

//
// Pull in example Backbone model and generated Thrift "classes"
//
var model = require('./model').loadSampleData();
var MemberStore = require('./gen-nodejs/MemberStore');
var Member = require('./gen-nodejs/member_types').Member;

//
// Service logic implementation for all methods
// supported by service.  Delegates to example Backbone model
//
var methods = {
	get: function(id, success) {
		success(new Member(model.get(id).toJSON()));
	},

	create: function(member, success) {
		model.add(member);
		success();
	},

	update: function (member, success) {
		model.get(member.id).set(member);
		success();
	},

	remove: function (id, success) {
		model.remove(model.get(id));
		success();
	},

	all: function (success) {
		success(_(model.toJSON()).chain()
			.sortBy(function (member) {
				return member.rank;
			})
			.map(function (member) {
				return new Member(member);
			})
			.value());
	},

	// TODO not yet used and should move into more general 'meta' method providing
	// instance actions, collection actions, and all other service metadata
	actions: function (success) {
		var actions = ['promote', 'demote', 'reset'];
		success(actions);
	},

	promote: function (id, success) {
		model.get(id).promote();
		success();
	},

	demote: function (id, success) {
		model.get(id).demote();
		success();
	},

	reset: function (success) {
		model.loadSampleData();
		success();
	}
};

// Start
thrift.createServer(MemberStore, methods /*, {transport: thrift.transport.TBufferedTransport} */).listen(9701);
console.log("Member Store listening on port %d", 9701);