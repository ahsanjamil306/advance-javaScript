


   console.log("Start")

   function callBack1() {
       setTimeout(function () {
           console.log("callBack1")
       }, 300)
   }

   function callBack2() {
       setTimeout(function () {
           console.log("callBack2")
       }, 200)
   }

   function callBack3() {
       setTimeout(function () {
           console.log("callBack3")
       }, 100)
   }

   function func1() {
       callBack1()
       console.log("func1")
   }
   func1()

   function func2() {
       callBack2()
       console.log("func2")
   }
   func2()

   function func3() {
       callBack3()
       console.log("func3")
   }
   func3()
   console.log("end")