/**
 * Item in a list of servers.
 */
class ServerPreviewObject {
  constructor(dto) {
    this.id = dto.id;
    this.name = dto.name;
    this.iconUrl = dto.iconUrl;

    const { _links: links } = dto;
    this.links = links;
  }
}

export default ServerPreviewObject;
