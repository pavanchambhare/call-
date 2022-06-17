
let userDetails ={
    nname: "Pavan chambhare",
    age:28,
    designation:"software engineer",
    printDetails:function(){
        console.log(this)

    }
}
userDetails.printDetails();


let userDetails2 ={
    nname: "Mahesh",
    age:55,
    designation:"software engineer",
    printDetails:function(){

    }
}
userDetails.printDetails.call(userDetails2)

