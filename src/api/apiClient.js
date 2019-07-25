export default class APIClient {
  static _setHeaders(cfg) {
    const myHeaders = new Headers();
    const headerKeys = (cfg && cfg.headerKeys) || {};
    const configKeys = Object.keys(headerKeys);
    configKeys.forEach(key => {
      myHeaders.append(headerKeys[key], cfg[key]);
    });
    myHeaders.delete("Content-Type");
    myHeaders.append("Content-Type", "application/json");
    return myHeaders;
  }

  static Get(url, cfg) {
    return new Promise((resolve, reject) => {
      const myInit = {
        method: "GET",
        headers: cfg && this._setHeaders(cfg),
        mode: "cors",
        cache: "default"
      };

      return fetch(url, myInit).then(
        response => {
          // fetch call came back with some response
          response.json().then(
            data => {
              cfg && cfg.isDebug && console.log(data);
              resolve(data);
            },
            jsonError => {
              cfg && cfg.isDebug && console.log("failed json decode");
              cfg && cfg.isDebug && console.log(jsonError);
              // failed to change response to json
              reject(jsonError);
            }
          );
        },
        error => {
          // fatal error
          cfg && cfg.isDebug && console.log("failed fetch");
          cfg && cfg.isDebug && console.log(error);
          reject(error);
        }
      );
    });
  }

  static Post(url, cfg, data) {
    return new Promise((resolve, reject) => {
      const myInit = {
        method: "POST",
        headers: this._setHeaders(cfg),
        mode: "cors",
        cache: "default",
        body: JSON.stringify(data)
      };

      return fetch(url, myInit).then(
        response => {
          // fetch call came back with some response
          response.json().then(
            data => {
              cfg && cfg.isDebug && console.log(data);
              resolve(data);
            },
            jsonError => {
              cfg && cfg.isDebug && console.log("failed json decode");
              cfg && cfg.isDebug && console.log(jsonError);
              // failed to change response to json
              reject(jsonError);
            }
          );
        },
        error => {
          // fatal error
          cfg && cfg.isDebug && console.log("failed fetch");
          cfg && cfg.isDebug && console.log(error);
          reject(error);
        }
      );
    });
  }
}
