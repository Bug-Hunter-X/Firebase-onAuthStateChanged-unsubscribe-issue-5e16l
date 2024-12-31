let unsubscribe;

const authStateChanged = (auth, callback) => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe; // Return the unsubscribe function
};

const unsubscribe = authStateChanged(auth, (user) => {
if (user) {
  // User is signed in
  console.log('user is signed in');
} else {
  // User is signed out
  console.log('user is signed out');
}
});

// unsubscribe(); //Call the unsubscribe function when you are done with it to stop listening for auth changes