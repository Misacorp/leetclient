import UserSummaryObject from '../User/UserSummaryObject';

/**
 * Represents a single server object.
 */
class ServerObject {
  constructor(dto) {
    this.id = dto.id;
    this.name = dto.name;
    this.iconUrl = dto.iconUrl;

    this.counts = dto.counts;
    this.users = dto.users.map((user) => new UserSummaryObject(user));
  }
}

export default ServerObject;
