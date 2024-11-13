import BaseException from "./BaseExceptios";

class NotFoundException extends BaseException {
  constructor(message: string = "Not found") {
    super(message, 404, "Not found resource");
  };
};

export default NotFoundException;