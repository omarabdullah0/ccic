 // 1

 function setCookie(name, value, days) {

    let date = new Date();
  
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
  
    let expires = "expires=" + date.toUTCString();
  
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  setCookie("username", "omar", 7);
  
  
  // 2  دالة لقراءة الكوكي
  
    function getCookie(name) {
  
    let cookies = document.cookie.split('; ');
  
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
  
  
        if (cookie.startsWith(name + '=')) {
  
        return cookie.split('=')[1];
    }
    }

    return null;
    }
let username = getCookie("username");
    console.log(username); 



  // 3  دالة لتحديث الكوكي      

    function updateCookie(name, newValue, newDays) {
  
    setCookie(name, newValue, newDays);
    } 

    updateCookie("username", "omar", 10); 

  // 4   دالة لحذف الكوكي

    function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}
// 5 
    deleteCookie("username"); 

    function displayCookieValue() {
        const cookieValue = getCookie("username");
        document.getElementById("cookieValue").innerText = cookieValue ? cookieValue : "";
    }