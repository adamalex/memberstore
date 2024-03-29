//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./member_types');
//HELPER FUNCTIONS AND STRUCTURES

var MemberStore_get_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
MemberStore_get_args.prototype = {};
MemberStore_get_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_get_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_get_args');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_get_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
MemberStore_get_result.prototype = {};
MemberStore_get_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Member();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_get_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_get_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_create_args = function(args) {
  this.member = null;
  if (args) {
    if (args.member !== undefined) {
      this.member = args.member;
    }
  }
};
MemberStore_create_args.prototype = {};
MemberStore_create_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.member = new ttypes.Member();
        this.member.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_create_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_create_args');
  if (this.member) {
    output.writeFieldBegin('member', Thrift.Type.STRUCT, 1);
    this.member.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_create_result = function(args) {
};
MemberStore_create_result.prototype = {};
MemberStore_create_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_create_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_create_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_update_args = function(args) {
  this.member = null;
  if (args) {
    if (args.member !== undefined) {
      this.member = args.member;
    }
  }
};
MemberStore_update_args.prototype = {};
MemberStore_update_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.member = new ttypes.Member();
        this.member.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_update_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_update_args');
  if (this.member) {
    output.writeFieldBegin('member', Thrift.Type.STRUCT, 1);
    this.member.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_update_result = function(args) {
};
MemberStore_update_result.prototype = {};
MemberStore_update_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_update_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_update_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_remove_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
MemberStore_remove_args.prototype = {};
MemberStore_remove_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_remove_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_remove_args');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_remove_result = function(args) {
};
MemberStore_remove_result.prototype = {};
MemberStore_remove_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_remove_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_remove_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_all_args = function(args) {
};
MemberStore_all_args.prototype = {};
MemberStore_all_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_all_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_all_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_all_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
MemberStore_all_result.prototype = {};
MemberStore_all_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Member();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_all_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_all_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_actions_args = function(args) {
};
MemberStore_actions_args.prototype = {};
MemberStore_actions_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_actions_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_actions_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_actions_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
MemberStore_actions_result.prototype = {};
MemberStore_actions_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.success.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_actions_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_actions_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        output.writeString(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_promote_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
MemberStore_promote_args.prototype = {};
MemberStore_promote_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_promote_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_promote_args');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_promote_result = function(args) {
};
MemberStore_promote_result.prototype = {};
MemberStore_promote_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_promote_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_promote_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_demote_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
MemberStore_demote_args.prototype = {};
MemberStore_demote_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_demote_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_demote_args');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_demote_result = function(args) {
};
MemberStore_demote_result.prototype = {};
MemberStore_demote_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_demote_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_demote_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_reset_args = function(args) {
};
MemberStore_reset_args.prototype = {};
MemberStore_reset_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_reset_args.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_reset_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStore_reset_result = function(args) {
};
MemberStore_reset_result.prototype = {};
MemberStore_reset_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MemberStore_reset_result.prototype.write = function(output) {
  output.writeStructBegin('MemberStore_reset_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MemberStoreClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
MemberStoreClient.prototype = {};
MemberStoreClient.prototype.get = function(id, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_get(id);
};

MemberStoreClient.prototype.send_get = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_get_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_get = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_get_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get failed: unknown result');
};
MemberStoreClient.prototype.create = function(member, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_create(member);
};

MemberStoreClient.prototype.send_create = function(member) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('create', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_create_args();
  args.member = member;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_create = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_create_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
MemberStoreClient.prototype.update = function(member, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_update(member);
};

MemberStoreClient.prototype.send_update = function(member) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('update', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_update_args();
  args.member = member;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_update = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_update_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
MemberStoreClient.prototype.remove = function(id, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_remove(id);
};

MemberStoreClient.prototype.send_remove = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('remove', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_remove_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_remove = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_remove_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
MemberStoreClient.prototype.all = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_all();
};

MemberStoreClient.prototype.send_all = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('all', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_all_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_all = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_all_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('all failed: unknown result');
};
MemberStoreClient.prototype.actions = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_actions();
};

MemberStoreClient.prototype.send_actions = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('actions', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_actions_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_actions = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_actions_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('actions failed: unknown result');
};
MemberStoreClient.prototype.promote = function(id, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_promote(id);
};

MemberStoreClient.prototype.send_promote = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('promote', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_promote_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_promote = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_promote_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
MemberStoreClient.prototype.demote = function(id, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_demote(id);
};

MemberStoreClient.prototype.send_demote = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('demote', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_demote_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_demote = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_demote_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
MemberStoreClient.prototype.reset = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_reset();
};

MemberStoreClient.prototype.send_reset = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('reset', Thrift.MessageType.CALL, this.seqid);
  var args = new MemberStore_reset_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MemberStoreClient.prototype.recv_reset = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MemberStore_reset_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
var MemberStoreProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
MemberStoreProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

MemberStoreProcessor.prototype.process_get = function(seqid, input, output) {
  var args = new MemberStore_get_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_get_result();
  this._handler.get(args.id, function (success) {
    result.success = success;
    output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_create = function(seqid, input, output) {
  var args = new MemberStore_create_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_create_result();
  this._handler.create(args.member, function (success) {
    result.success = success;
    output.writeMessageBegin("create", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_update = function(seqid, input, output) {
  var args = new MemberStore_update_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_update_result();
  this._handler.update(args.member, function (success) {
    result.success = success;
    output.writeMessageBegin("update", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_remove = function(seqid, input, output) {
  var args = new MemberStore_remove_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_remove_result();
  this._handler.remove(args.id, function (success) {
    result.success = success;
    output.writeMessageBegin("remove", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_all = function(seqid, input, output) {
  var args = new MemberStore_all_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_all_result();
  this._handler.all(function (success) {
    result.success = success;
    output.writeMessageBegin("all", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_actions = function(seqid, input, output) {
  var args = new MemberStore_actions_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_actions_result();
  this._handler.actions(function (success) {
    result.success = success;
    output.writeMessageBegin("actions", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_promote = function(seqid, input, output) {
  var args = new MemberStore_promote_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_promote_result();
  this._handler.promote(args.id, function (success) {
    result.success = success;
    output.writeMessageBegin("promote", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_demote = function(seqid, input, output) {
  var args = new MemberStore_demote_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_demote_result();
  this._handler.demote(args.id, function (success) {
    result.success = success;
    output.writeMessageBegin("demote", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MemberStoreProcessor.prototype.process_reset = function(seqid, input, output) {
  var args = new MemberStore_reset_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MemberStore_reset_result();
  this._handler.reset(function (success) {
    result.success = success;
    output.writeMessageBegin("reset", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

