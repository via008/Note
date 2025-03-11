gcd(a,b) = gcd(b, a % b);

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);