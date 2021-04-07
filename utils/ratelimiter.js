class RateLimiter {
  constructor(refresh_time, max_length = 80000) {
    this.reintializetUsers();
    this.init();
    this.REFRESH_TIME = refresh_time;
    this.MAX_LENGTH = max_length;
  }
  reintializetUsers() {
    this.users = {};
  }

  init() {
    this.interval = setInterval(this.reintializetUsers, this.REFRESH_TIME);
  }
  reduceRate(user, length) {
    if (this.isAbleToCall(user, length)) {
      const oldRate = this.users[user] || this.MAX_LENGTH;
      this.users[user] = oldRate - length;
    } else {
      throw new Error("Payment Required");
    }
  }
  isAbleToCall(user, length) {
    if (!(user in this.users)) {
      return length <= this.MAX_LENGTH;
    }
    return this.users[user] >= length;
  }

  middleware = (req, res, next) => {
    const ip = req.ip;
    const length = req.body.length;
    try {
      this.reduceRate(ip, length);
    } catch (e) {
      res.status(402);
      res.json({ error: e.message });
    }
    next();
  };
}

module.exports = RateLimiter;
