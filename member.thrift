#
# properties for a Member "record"
# index dataType propertyName
#
struct Member {
  1: i32 id,
  2: string first,
  3: string last,
  4: i32 rank
}

#
# interface for MemberStore service
# each line is a public method
# returnvalue methodName(paramIndex paramType paramName)
#
service MemberStore {

  # standard CRUD operations
  Member get(1: i32 id),
  void create(1: Member member),
  void update(1: Member member),
  void remove(1: i32 id),
  list<Member> all(),

  # list of custom actions
  # should replace with more general
  # 'meta' method
  list<string> actions(),

  # custom actions
  void promote(1: i32 id),
  void demote(1: i32 id),
  void reset()
}

# see http://wiki.apache.org/thrift/Tutorial for more syntax help