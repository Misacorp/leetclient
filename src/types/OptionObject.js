/**
 * Represents an option that the user can select.
 * @param {string} name  Option name displayed to the user
 * @param {string} value Option value used for state management etc.
 */
class OptionObject {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

export default OptionObject;
