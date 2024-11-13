class BaseException extends Error {
  public status: number;
  public title: string;

  constructor(message: string, status: number, title: string) {
    super(message);
    this.status = status;
    this.title = title;
  };
};

export default BaseException;