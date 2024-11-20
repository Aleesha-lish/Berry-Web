// const loginForm = document.querySelector('.login-form');
// const signupForm = document.querySelector('.signup-form');
// const backLayer = document.querySelector('.back-layer');

// document.querySelector('.login button').addEventListener('pointerdown', () => {
//   signupForm.classList.remove('active');
//   loginForm.classList.add('active');
//   backLayer.style.clipPath = '';
// });

// document.querySelector('.signup button').addEventListener('pointerdown', () => {
//   loginForm.classList.remove('active');
//   signupForm.classList.add('active');
//   backLayer.style.clipPath = 'inset(0 0 0 50%)';
// });

// let userData = [];

// function signUp() {
//   const firstName = document.getElementById('f-name').value;
//   const lastName = document.getElementById('l-name').value;
//   const email = document.getElementById('semail').value;
//   const password = document.getElementById('spassword').value;

//   if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
//     alert('Please fill in all the sign-up fields.');
//   } else {
//     const newUser = {
//       firstName,
//       lastName,
//       email,
//       password
//     };

//     userData.push(newUser);

//     localStorage.setItem('userData', JSON.stringify(userData));

//     alert('Welcome! Sign up successful. Please proceed to login.');

//     loginForm.classList.add('active');
//     signupForm.classList.remove('active');
//     backLayer.style.clipPath = '';
//   }
// }

// function login() {
//   const email = document.getElementById('lemail').value;
//   const password = document.getElementById('lpassword').value;

//   // Retrieve the userData array from local storage
//   const storedData = localStorage.getItem('userData');
//   userData = storedData ? JSON.parse(storedData) : [];

//   // Find the user with the matching email and password
//   const user = userData.find(user => user.email === email && user.password === password);

//   if (user) {
//     alert('Login successful!');
//     window.location.href = 'index.html';
//   } else {
//     alert('Invalid email or password. Please try again.');
//   }
// }

// function logout() {
//   window.location.href = 'logout.html';
// }















// const loginForm = document.querySelector('.login-form');
// const signupForm = document.querySelector('.signup-form');
// const backLayer = document.querySelector('.back-layer');

// document.querySelector('.login button').addEventListener('pointerdown', () => {
//   signupForm.classList.remove('active');
//   loginForm.classList.add('active');
//   backLayer.style.clipPath = '';
// });

// document.querySelector('.signup button').addEventListener('pointerdown', () => {
//   loginForm.classList.remove('active');
//   signupForm.classList.add('active');
//   backLayer.style.clipPath = 'inset(0 0 0 50%)';
// });

// let userData = [];

// function signUp() {
//   const firstName = document.getElementById('f-name').value;
//   const lastName = document.getElementById('l-name').value;
//   const email = document.getElementById('semail').value;
//   const password = document.getElementById('spassword').value;

//   if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
//     alert('Please fill in all the sign-up fields.');
//   } else {
//     const newUser = {
//       firstName,
//       lastName,
//       email,
//       password
//     };

//     userData.push(newUser);

//     localStorage.setItem('currentUser', JSON.stringify(newUser));
//     localStorage.setItem('userData', JSON.stringify(userData));

//     alert('Welcome! Sign up successful. Please proceed to login.');

//     loginForm.classList.add('active');
//     signupForm.classList.remove('active');
//     backLayer.style.clipPath = '';
//   }
// }

// function login() {
//   const email = document.getElementById('lemail').value;
//   const password = document.getElementById('lpassword').value;

//   const storedData = localStorage.getItem('userData');
//   userData = storedData ? JSON.parse(storedData) : [];

//   const user = userData.find(user => user.email === email && user.password === password);

//   if (user) {
//     alert('Login successful!');
//     window.location.href = 'index.html';
//   } else {
//     alert('Invalid email or password. Please try again.');
//   }
// }

// function logout() {
//   window.location.href = 'logout.html';
// }

// // Retrieve the currently signed up user from local storage
// const storedUser = localStorage.getItem('currentUser');
// const currentUser = storedUser ? JSON.parse(storedUser) : null;

// if (currentUser) {
//   // Access of the currently signed up user
//   console.log(currentUser.firstName);
//   console.log(currentUser.lastName);
//   console.log(currentUser.email);
//   console.log(currentUser.password);
// }














  // function generateUniqueId() {
  //   const timestamp = Date.now();
  //   const randomString = Math.random().toString(36).substring(2, 15);
  //   return `${timestamp}${randomString}`;
  // }

  // const loginForm = document.querySelector('.login-form');
  // const signupForm = document.querySelector('.signup-form');
  // const backLayer = document.querySelector('.back-layer');

  // document.querySelector('.login button').addEventListener('pointerdown', () => {
  //   signupForm.classList.remove('active');
  //   loginForm.classList.add('active');
  //   backLayer.style.clipPath = '';
  // });

  // document.querySelector('.signup button').addEventListener('pointerdown', () => {
  //   loginForm.classList.remove('active');
  //   signupForm.classList.add('active');
  //   backLayer.style.clipPath = 'inset(0 0 0 50%)';
  // });

  // let userData = [];

  // function signUp() {
  //   const firstName = document.getElementById('f-name').value;
  //   const lastName = document.getElementById('l-name').value;
  //   const email = document.getElementById('semail').value;
  //   const password = document.getElementById('spassword').value;

  //   if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
  //     alert('Please fill in all the sign-up fields.');
  //   } else {
  //     const newUser = {
  //       id: generateUniqueId(),
  //       firstName,
  //       lastName,
  //       email,
  //       password
  //     };

  //     userData.push(newUser);

  //     localStorage.setItem('currentUser', JSON.stringify(newUser));
  //     localStorage.setItem('userData', JSON.stringify(userData));

  //     alert('Welcome! Sign up successful. Please proceed to login.');

  //     loginForm.classList.add('active');
  //     signupForm.classList.remove('active');
  //     backLayer.style.clipPath = '';
  //   }
  // }

  // function login() {
  //   const email = document.getElementById('lemail').value;
  //   const password = document.getElementById('lpassword').value;

  //   const storedData = localStorage.getItem('userData');
  //   userData = storedData ? JSON.parse(storedData) : [];

  //   const user = userData.find(user => user.email === email && user.password === password);

  //   if (user) {
  //     alert('Login successful!');
  //     window.location.href = 'index.html';
  //   } else {
  //     alert('Invalid email or password. Please try again.');
  //   }
  // }

  // function logout() {
  //   window.location.href = 'logout.html';
  // }

  // // Retrieve the currently signed up user from local storage
  // const storedUser = localStorage.getItem('currentUser');
  // const currentUser = storedUser ? JSON.parse(storedUser) : null;

  // if (currentUser) {
  //   console.log(currentUser.id);
  //   console.log(currentUser.firstName);
  //   console.log(currentUser.lastName);
  //   console.log(currentUser.email);
  //   console.log(currentUser.password);
  // }













  function generateUniqueId() {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${timestamp}${randomString}`;
  }
  
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const backLayer = document.querySelector('.back-layer');
  
  document.querySelector('.login button').addEventListener('pointerdown', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    backLayer.style.clipPath = '';
  });
  
  document.querySelector('.signup button').addEventListener('pointerdown', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    backLayer.style.clipPath = 'inset(0 0 0 50%)';
  });
  
  let userData = [];
  
  function signUp() {
    const firstName = document.getElementById('f-name').value;
    const lastName = document.getElementById('l-name').value;
    const email = document.getElementById('semail').value;
    const password = document.getElementById('spassword').value;
  
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the sign-up fields.');
    } else {
      const existingUser = userData.find(user => user.email === email);
      if (existingUser) {
        alert('User with the provided email already exists. Please log in instead.');
        return;
      }
  
      const newUser = {
        id: generateUniqueId(),
        firstName,
        lastName,
        email,
        password
      };
  
      userData.push(newUser);
  
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Welcome! Sign up successful. Please proceed to login.');
  
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
      backLayer.style.clipPath = '';
    }
  }
  
  function login() {
    const email = document.getElementById('lemail').value;
    const password = document.getElementById('lpassword').value;
  
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }
  
    const storedData = localStorage.getItem('userData');
    userData = storedData ? JSON.parse(storedData) : [];
  
    const user = userData.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert('Login successful!');
  
      localStorage.setItem('currentUser', JSON.stringify(user));
  
      window.location.href = 'index.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'logout.html';
  }
  
  const storedUser = localStorage.getItem('currentUser');
  const currentUser = storedUser ? JSON.parse(storedUser) : null;
  
  if (currentUser) {
    console.log(currentUser.id);
    console.log(currentUser.firstName);
    console.log(currentUser.lastName);
    console.log(currentUser.email);
    console.log(currentUser.password);
  }
  
  // Retrieve the previously signed up users from local storage
  const storedData = localStorage.getItem('userData');
  userData = storedData ? JSON.parse(storedData) : [];



















