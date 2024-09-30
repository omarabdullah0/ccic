// 1 
function b() {
    var myvar = 1;
    console.log(myvar);  // 1
  }
  console.log(x); // undefined
  
  a();
  b();
  
  function a() {
    var myvar = 2;
    console.log(myvar); // 2
  }
  
  var x = 5;
  //console.log(myvar);  ويتم طباعته بستخدام  myvar داخلها متغير  b داله  
  //لانه تم تعريفه بالاسفل undefined محاوله طباعه المتغير اكس لاكنه سوف يعطي  console.log(x)
  // a(); استدعاء الداله 
  // b(); استدعاء الداله 
  //console  التي تحتوي علس متغير و طباعته في ال  a(); الداله  
  //5  بيساوي  x المتغير 
  
  //  2  =================================================
  function f1(x, y) {
    if (x > 3) {
        var z = 3;
    } else {
        var zz = 3;
    }
  
    console.log(z, zz); // undefined  3   //   z  لو الشرط اكبر من3 عرف  
  
    zzz = 300; 
  }
  
  f1(1, 3); // استدعاء الداله 
  
  console.log(zzz);  // 300 
  
  /*
  الدالة f1(x, y):
  الداله تاخد قيمتسن و تقوم بتنفيذ شرط معين 
     3لو ال اكس اكبر من  
  تجعل ال    ب 3  z  
  */
  
  //  3  =================================================
  
  function b() {
    myvar = 3;  // يتم تعيين 3 للمتغير myvar بدون var، لذا يصبح متغير عام (global)
    console.log(myvar);  //     3      myvar طباعة قيمة    
  }
  
  function a() {
    console.log(myvar);//    2 تعريف متغير  بقيمه myvar a  داخل الدالة 
    b();  // استدعاء الدالة b، التي ستقوم بتعديل myvar العام وطباعة 3
  }
  
  var yvar = 1; // 1 تعريف متغير عام  بقيمه yvar  
  console.log(myvar); 
  a(); // استدعاء الدالة a التي تطبع 2 ثم تستدعي الدالة b التي تطبع 3
  console.log(myvar); //    3     طباعة المتغير myvar بعد أن تم تعريفه عالمياً داخل الدالة b 
  
  
  //  4  =================================================
  
  function b() {
    console.log(myvar); //   myvarهنا يتم محاولة طباعة المتغير 
  }
  
  function a() {
    var myvar = 2; // myvar=2     تعريف متغير a ت    داخل الدالة 
    console.log(myvar); //     2   myvar طباعة المتغير   
    b(); //b استدعاء الدالة 
  }
  
  var myvar = 1; //myvar=1 تعريف متغير عام 
  console.log(myvar); //    1     myvar طباعة المتغير العام 
  a(); //a  استدعاء الدالة
  console.log(myvar); //     1     myvar طباعة المتغير العام  
  
  //  5  =================================================
  
  function b() {
    console.log(myvar); // سيبحث عن المتغير myvar في السياق العالمي (global scope)
  }
  
  function a() {
    var myvar = 2; //myvar=2 تعريف متغير داخل الدالة 
    console.log(myvar); //myvar يطبع المتغير  
    b(); //b استدعاء الدالة 
  }
  a(); //a استدعاء الدالة 
  
  console.log(myvar); // سيبحث عن myvar في السياق العالمي (global scope)
  
  //  6  =================================================
   //changing the lexical scope
  
   function a() {} //a تعريف الدالة 
    function b() {  // b داخل الداله تعريف الداله 
  
      console.log(myvar);   // myvar محاولة طباعة المتغير 
  
       var myvar = 2;        //داخل الداله  myvar تعريف المتغير 
  
  
       // طباعة المتغير 'myvar'  داخل الدالة 
       console.log(myvar);  // 2 
  
       b();  // b استدعاء الداله 
  
   }
  a();    // a استدعاء الداله 
   // محاوله طباعه المتغير بالخارج
   // error  لانه ليس معرف بالخارد
   console.log(myvar);