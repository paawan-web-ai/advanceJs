// js -> single threaded

// ek kaam ek baar mein kar paayegi

// synchronous approach(ek ke baad ek - ek ke baad ek)

//asynchronous approach( Heavy operations run in the background while lighter tasks finish first)

// callback->ek function jo turant nahi chalega ye chalega jap aapka koi kaam complete hoga

// -------------------------

// function getDataFromInstagram(val,cal){
//     console.log('fetching...')
//     setTimeout(() => {
//         cal('hello')
//     }, 2000);
// }
// getDataFromInstagram("harh",function(detail){
//     console.log(detail)
// })

// -------------------------


// function abcd(val){
//   val(function(elem){
//       elem(function(val2){
//         val2(function(){
//          console.log("hey hey hey")
//         })
//       })
//   })
// } 
// abcd(function(val1){
//   val1(function(char){
//     char(function(val3){
//        val3()
//     })
//   })
// })

// -------------------------

 
//amitSeDetailLaao(address,cb)
//dukaanKoDhundho(details,cb)
//samaanLelo(samaanList,cb)
//gharAaajaao(address,cb)

function amitSeDetailslaao(address, cb) {
  console.log('fetching location...')
  setTimeout(() => {
    cb({ lat: 23.86, lng: 76.5 })
  }, 2000);
}

function dukaanKoDhundo(address, cb) {
  console.log("fetching shop...")
  setTimeout(() => {
    cb("ek kilo rice dede")
  }, 2000);
}


amitSeDetailslaao("indrapuri 231-H Block",function(detail){
 console.log(detail)

dukaanKoDhundo("rajnaghar",function(detail){
    console.log(detail)
 })
})