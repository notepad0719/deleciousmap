//firebabse 웹 페이지 콘솔 -> 프로젝트 설정 -> sdk 설정 및 구성에서 복사
const firebaseConfig = {
  apiKey: 'AIzaSyBY9tPiZh08ejKX16WpQknxb03BQVH-YV8',
  authDomain: 'testlogin-46429.firebaseapp.com',
  databaseURL: 'https://testlogin-46429-default-rtdb.firebaseio.com',
  projectId: 'testlogin-46429',
  storageBucket: 'testlogin-46429.appspot.com',
  messagingSenderId: '1009454182432',
  appId: '1:1009454182432:web:b704be0a4ff752088c0c45',
};


firebase.initializeApp(firebaseConfig);

const ID = document.querySelector('#RegisterID');
const PW = document.querySelector('#RegisterPW');
const registerBtn = document.querySelector('.loginBtn');
const errorMsg = document.querySelector('.error-msg');

registerBtn.addEventListener('click', () => {
  const email = ID.value;
  const password = PW.value;
  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success');
      location.assign('./main.html'); //일정 관리 페이지 주소
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
        errorMsg.innerText = '복잡한 비밀번호를 사용해주세요.';
      } else if ((errorCode = 'auth/email-already-in-use')) {
        errorMsg.innerText = '이미 사용된 e-mail입니다.';
      } else {
        errorMsg.innerText = '유효하지 않은 형식입니다.';
      }
    });
});
