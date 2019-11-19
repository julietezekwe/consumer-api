import BaseRepository from './BaseRepository';
import messageSchema from '../schemas/MessageSchema';
/**
 * @description MessageRepository
 * @class BaseRepository
 */
class MessageRepository extends BaseRepository {
  /**
   * UserRepository constructor
   */
  constructor({ db }) {
    super('Message', messageSchema, db);
  }
}
export default MessageRepository;
