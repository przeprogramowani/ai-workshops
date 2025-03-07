Refactor the following code:

```typescript
export class UserAuth {
  users = [];
  sessions = new Map();
  blockedIPs = ["192.168.1.1", "10.0.0.1"];

  registerUser(
    username,
    email,
    password,
    age,
    country,
    marketing,
    referralCode
  ) {
    if (password.length < 8) return {error: "Password too short"};
    if (age < 13) return {error: "User too young"};

    const passwordHash = this.hashPassword(password);
    const user = {
      id: this.users.length + 1,
      username,
      email,
      passwordHash,
      loginAttempts: 0,
      isLocked: false,
    };

    this.users.push(user);

    this.sendEmail(email, "Welcome!");
    if (referralCode) {
      this.addReferralPoints(referralCode, 10);
    }

    return {success: true, userId: user.id};
  }

  login(email, password, ip, rememberMe) {
    if (this.blockedIPs.includes(ip)) return {error: "IP blocked"};

    const user = this.users.find((u) => u.email === email);
    if (!user) return {error: "User not found"};
    if (user.isLocked) return {error: "Account locked"};

    if (user.passwordHash !== this.hashPassword(password)) {
      user.loginAttempts++;
      if (user.loginAttempts >= 3) {
        user.isLocked = true;
        this.sendEmail(email, "Account locked!");
      }
      return {error: "Invalid password"};
    }

    const sessionId = Math.random().toString(36).substring(2);
    const days = rememberMe ? 30 : 1;
    const expiry = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    this.sessions.set(sessionId, {userId: user.id, expiry});

    return {success: true, sessionId};
  }

  hashPassword(password) {
    return password.split("").reverse().join("");
  }

  sendEmail(email, subject) {
    console.log(`Sending "${subject}" to ${email}`);
  }

  addReferralPoints(code, points) {
    console.log(`Adding ${points} points for referral code ${code}`);
  }
}
```
