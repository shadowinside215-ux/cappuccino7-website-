const fs = require('fs');

let rules = fs.readFileSync('firestore.rules', 'utf-8');
rules = rules.replace(
  /function isAdmin\(\) \{\s*\/\/[^\n]*\s*\/\/[^\n]*\s*return isSignedIn\(\);\s*\}/,
  `function isAdmin() {
      // Only allow the specific admin email
      return isSignedIn() && request.auth.token.email == 'dragonballsam86@gmail.com';
    }`
);

fs.writeFileSync('firestore.rules', rules);
console.log('patched rules');
