function signOut(){
    sessionStorage.removeItem('currentUser');
    window.location.href = './signin.html';
}