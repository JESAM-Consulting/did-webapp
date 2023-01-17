const protocol = "https";
const host = "api.did.rejoicehub.com/api/v1";
// const host = "api.photodepot.rejoicehub.com/api/v1";

const protocolSocket = "https";
// const hostSocket = "api.photodepot.rejoicehub.com";
const hostSocket = "api.did.rejoicehub.com/api/v1";

// const protocolSocket = "http";
// const hostSocket = "192.168.29.66:5051";

// const protocol = "http";
// const host = "192.168.29.66:5051/api/v1";

const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
export const socketUrl = `${protocolSocket}://${hostSocket}${
  port ? ":" + port : ""
}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
  socketUrl: socketUrl,
};
