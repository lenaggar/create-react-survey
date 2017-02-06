var env = process.env;

export default {
  port: env.PORT || 8000,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}/`;
  }
};