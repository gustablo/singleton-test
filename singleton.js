
class RedisService {
    constructor() {
        this.client = null;
        
    }

    start() {
        if (this.client) return;

        this.client = Math.floor(Math.random() * 100);

    }
}

module.exports = new RedisService();
