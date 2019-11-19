import Queue from 'bull';


const name = 'newMessage';

/**
 * @description BaseRepository
 * @class BaseRepository
 */
class Bull {
  /**
   * constructor
   */
  constructor({
    config, logger, messageRepository, redis,
  }) {
    this.logger = logger;
    this.redis = redis;
    this.messageRepository = messageRepository;
    this.queue = new Queue(name, {
      redis: config.redis,
    });
  }

  /**
   * @returns {void}
   */
  async listen() {
    this.queue.on('completed', async (job) => {
      await job.remove();
      return this.logger.info('Job is completed');
    });
    this.queue.on('failed', (job) => {
      const { failedReason } = job.toJSON();
      return this.logger.error(`This Job failed with ${failedReason}`);
    });
    this.queue.on('stalled', () => this.logger.warn('Stalling...'));
    this.queue.on('error', error => this.logger.error(`This job failed with error: ${error.message}`));
    this.queue.process(async (job, done) => {
      try {
        await this.messageRepository.create(job.data);
        await this.redis.setObject('id', job.data.task_id, job.data, 86400);
        done(null);
      } catch (error) {
        done(error.message);
      }
    });
  }

  /**
   * @returns {void}
   */
  stop() {
    this.queue.close();
  }
}

export default Bull;
