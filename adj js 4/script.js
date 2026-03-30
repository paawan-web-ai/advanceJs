// 'callback' -> ek function jo turant nahi chalega ye chalega jab aapka koi kaam complete hoga


// getDataFromInstagram("ayush123",function(){

// })

// ------------------------------------------

// function abcd(fn){
// fn(function(fn3){
// fn3(function(fn5){
//    fn5() 
// })
// })
// }
// abcd(function(fn2){
//     fn2(function(fn4){
//       fn4(function(){
//       console.log('hello function')
//       })
//     })
// })

// ----------------------------------------

//callbacks
// situation -> github se repository data laao

//getUserDetails(username, cb )
//getAllRepos(userid, cb)
//getRepoDetail(repos[0], cb)

// ------------------------------------------

// non- technical statement

// amitSeDetailsLaao(address, cb)
// dukaanKoDhundho(details, cb)
// samaanLelo(samaanlist, cb)
// gharAaajaao(address, cb)


function amitSeDetailsLaao(address,cb){
    console.log("fetching..")
    setTimeout(() => {
        cb({lat:23.36 , lng:69.5})
    }, 3000);
}

amitSeDetailsLaao("indrapuri 23" , function(details){
    console.log(details)
})


// function abcd(name,cb){

//   cb('hello')
// }
// abcd('harsh',function(details){
//      console.log(details)
// })