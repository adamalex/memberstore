var thrift = require('thrift');
var _ = require('underscore');

var model = require('./model').loadSampleData();
var MemberStore = require('./gen-nodejs/MemberStore');
var Member = require('./gen-nodejs/member_types').Member;

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
		success(_(model.toJSON()).map(function (member) {
			return new Member(member);
		}));
	},

	actions: function (success) {
		var actions = ['promote', 'demote', 'reset'];
		success(actions);
	},

	promote: function (id, success) {
		success();
	},

	demote: function (id, success) {
		success();
	},

	reset: function (success) {
		model.loadSampleData();
		success();
	}
};

thrift.createServer(MemberStore, methods /*, {transport: thrift.transport.TBufferedTransport} */).listen(9701);
console.log("Member Store listening on port %d", 9701);