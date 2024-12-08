const sessions = new Map();

class SessionManager {
  static create(userId, data = {}) {
    sessions.set(userId, { ...data, createdAt: Date.now() });
  }

  static get(userId) {
    return sessions.get(userId);
  }

  static update(userId, data) {
    const session = sessions.get(userId);
    if (session) {
      sessions.set(userId, { ...session, ...data });
    }
    return session;
  }

  static delete(userId) {
    return sessions.delete(userId);
  }

  static cleanup() {
    const ONE_HOUR = 3600000;
    const now = Date.now();
    
    for (const [userId, session] of sessions.entries()) {
      if (now - session.createdAt > ONE_HOUR) {
        sessions.delete(userId);
      }
    }
  }
}

// Run cleanup every hour
setInterval(() => SessionManager.cleanup(), 3600000);

module.exports = SessionManager;