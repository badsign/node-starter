module.exports = class UsersService {
  findOne(id) {
    return {
      id,
      name: 'test'
    };
  }
  findAll() {
    return [{ id: 1, name: 'test' }, { id: 2, name: 'second' }];
  }
  create(user) {
    return { ...user, id: 11 };
  }
  update(id, user) {
    return { ...user, id };
  }
  delete(id) {
    return id;
  }
};