import UserObject from '../UserObject';

/**
 * Represents a single server object.
 */
class ServerObject {
  constructor(dto) {
    this.id = dto.id;
    this.name = dto.name;
    this.iconUrl = dto.iconUrl;

    this.counts = dto.counts;
    this.users = dto.users.map((user) => new UserObject(user));
  }
}

export default ServerObject;
