struct Member {
  1: i32 id,
  2: string first,
  3: string last,
  4: i32 rank
}

service MemberStore {
  Member get(1: i32 id),
  void create(1: Member member),
  void update(1: Member member),
  void remove(1: i32 id),
  list<Member> all(),

  list<string> actions(),

  void promote(1: i32 id),
  void demote(1: i32 id),
  void reset()
}
