import ServerPreviewObject from './ServerPreviewObject';

/**
 * List of servers.
 */
class ServerListObject {
  constructor(dto) {
    this.servers = dto.map((serverDto) => new ServerPreviewObject(serverDto));
  }
}

export default ServerListObject;
