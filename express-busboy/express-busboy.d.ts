// Type definitions for express-busboy
// Project: https://www.npmjs.org/package/express-busboy
// Definitions by: Oliver Ridgway <https://github.com/kineticfaction/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../node/node.d.ts" />

declare namespace Express {

  export interface Request {
    files?: any;
  }

}
