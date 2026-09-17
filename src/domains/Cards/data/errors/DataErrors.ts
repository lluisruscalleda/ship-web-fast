export class NetworkError extends Error {
  constructor(message = 'No network connection') {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ServerError extends Error {
  constructor(message = 'Server error') {
    super(message);
    this.name = 'ServerError';
  }
}

export class NotFoundError extends Error {
  constructor(message = 'No cards found for this search') {
    super(message);
    this.name = 'NotFoundError';
  }
}
