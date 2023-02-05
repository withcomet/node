import { Base } from '.';
import { UsageGetResponse } from './types/usage';

export class Usage extends Base {
  /**
   * Get API usage
   *
   * @returns A list of requests made to the API.
   */

  async get() {
    const response = this.fetchFunction(`/usage`, {
      method: 'GET'
    });
    return (await response).json() as Promise<UsageGetResponse>;
  }
}
