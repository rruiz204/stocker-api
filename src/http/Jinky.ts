import BaseException from "@core/exceptions/BaseExceptios";
import type { Response, Request } from "express";


interface JinkyResponse {
  status?: number;
  data: any;
};

export type JinkyExtesionType = "alpha" | "zetha"

export interface JinkyExtension {
  type: JinkyExtesionType;
  invoke(req: Request, res: Response): Promise<void> | void;
};

export type JinkyHandler = (req: Request) => Promise<JinkyResponse> | JinkyResponse



class Jinky {
  private handler: JinkyHandler;

  private extensions: JinkyExtension[] = [];

  constructor(handler: JinkyHandler) {
    this.handler = handler;
  };

  private handleException(err: any, res: Response) {
    if (err instanceof BaseException) {
      res.status(err.status).json({ title: err.title, message: err.message });
    } else {
      res.status(500).json({
        title: "Internal server error",
        message: err.message
      });
    };
  };

  public addExtension(extension: JinkyExtension) {
    this.extensions.push(extension);
    return this;
  };

  private applyExtensions(type: JinkyExtesionType, req: Request, res: Response) {
    const extensions = this.extensions.filter(e => e.type == type);
    extensions.forEach(async e => await e.invoke(req, res));
  };

  public build() {
    return async (req: Request, res: Response) => {
      try {
        this.applyExtensions("alpha", req, res);

        const response = await this.handler(req);
        res.status(response.status ?? 200).json(response);

        this.applyExtensions("zetha", req, res);
      } catch (err) {
        this.handleException(err, res);
      };
    };
  };
};

export default Jinky;