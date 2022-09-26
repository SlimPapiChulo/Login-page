const login = document.querySelector('.login-container');
const register = document.querySelector('.sign-in-container>div');
const signUp = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');
const passwordShows = document.querySelectorAll('.fa-eye');
const passwordHides = document.querySelectorAll('.fa-eye-slash');
const passwordOne = document.querySelector('#signupPassword');
const passwordTwo = document.querySelector('#signinPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const fullName = document.querySelector("#fullName");
const emails = document.querySelectorAll("#email");

// ********************BUTTONS********************
const actionBtns = document.querySelectorAll(".btn")
// *************MODAL POP UPS *********************
const popUp = document.querySelector(".pop-up");
const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");
const modalFour = document.querySelector(".modal-four");
const modalFive = document.querySelector(".modal-five");
const goBack = document.querySelectorAll(".fa-times");
const altLogin = document.querySelector(".modal-btn");
const tryAgain = document.querySelectorAll(".modal-btn-back");

let users = [];

// SignUp button and cancle the modal popUp
actionBtns.forEach(function(actionBtn){
    actionBtn.addEventListener("click", function(e){
        const change = e.currentTarget.classList
        if(change.contains("one")){
            emails.forEach(function(email){
                if(email.classList.contains("emailSignUp")){
                    email;
                    if(fullName.value == "" || email.value == "" || signupPassword.value == "" || confirmPassword.value == ""){
                        signUp.style.filter = "blur(0.2em)"
                        popUp.style.display = "block"
                        modalTwo.style.display = "flex"
                        modalOne.style.display = ""
                        modalThree.style.display = ""
                        modalFour.style.display = ""
                        modalFive.style.display = ""
                        return false;
                    }
                    else if ( signupPassword.value !== confirmPassword.value){
                        signUp.style.filter = "blur(0.2em)"
                        popUp.style.display = "block"
                        modalThree.style.display = "flex"
                        modalTwo.style.display = ""
                        modalOne.style.display = ""
                        modalFour.style.display = ""
                        modalFive.style.display = ""
                    }
                    else{
                    const obj = {
                        id: Date.now(),
                        fullName: fullName.value,
                        email: `${email.value}`,
                        password: `${signupPassword.value}`
                    }
                    users.push(obj);
                    console.log("added", {users});
                    localStorage.setItem("myUsers", JSON.stringify(users))

                    signUp.style.filter = "blur(0.2em)"
                    popUp.style.display = "block"
                    modalOne.style.display = "flex"
                    modalTwo.style.display = "none"
                    modalThree.style.display = "none"
                    modalFour.style.display = "none"
                    modalFive.style.display = "none"

                    }
                }
            })
                
        }
    })
})

// SignIn button and cancle the modal popUp
actionBtns.forEach(function(actionBtn){
    actionBtn.addEventListener("click", function(e){
        const chg = e.currentTarget.classList
        if(chg.contains("two")){
            emails.forEach(function(email){
                if(email.classList.contains("emailSignIn")){
                    const name = JSON.parse(localStorage.getItem('myUsers')) 
                    // console.log(name[0].email)
                    // console.log(name[0].password)
                    if(email.value == `${name[0].email}` && signinPassword.value == `${name[0].password}`){
                        signIn.style.filter = "blur(0.2em)"
                        popUp.style.display = "block"
                        modalFive.style.display = "flex"
                        modalFour.style.display = "none"
                        modalThree.style.display = "none"
                        modalOne.style.display = "none"
                        modalTwo.style.display = "none"
                        localStorage.clear();
                    }
                    else {
                        signIn.style.filter = "blur(0.2em)"
                        popUp.style.display = "block"
                        modalFour.style.display = "flex"
                        modalFive.style.display = "none"
                        modalThree.style.display = "none"
                        modalOne.style.display = "none"
                        modalTwo.style.display = "none"
                    }
                }
            })
        }
    })
})

goBack.forEach(function(back){
    back.addEventListener("click", function(){
        popUp.style.display = "none"
        modalOne.style.display = "none"
        signUp.style.filter = ""
        signIn.style.filter = ""
    })
})
tryAgain.forEach(function(back){
    back.addEventListener("click", function(){
        popUp.style.display = "none"
        modalOne.style.display = "none"
        signUp.style.filter = ""
        signIn.style.filter = ""
    })
})
altLogin.addEventListener("click", function(){
    popUp.style.display = "none"
    modalOne.style.display = "none"
    signUp.style.filter = ""
    register.lastElementChild.classList.add("active");
    login.firstElementChild.classList.remove("active")
    signIn.style.display = "block"
    signUp.style.display = "none"
})


login.lastElementChild.addEventListener("click", function(){
    register.lastElementChild.classList.add("active");
    login.firstElementChild.classList.remove("active")
    signIn.style.display = "block"
    signUp.style.display = "none"
})
register.firstElementChild.addEventListener("click", function(){
    login.firstElementChild.classList.add("active");
    register.lastElementChild.classList.remove("active")
    signUp.style.display = "block"
    signIn.style.display = "none"
})

signupPassword.addEventListener("click",function(){
    this.setAttribute("type","password")
})
signinPassword.addEventListener("click",function(){
    this.setAttribute("type","password")
})
confirmPassword.addEventListener("click",function(){
        this.setAttribute("type","password")
    })

    passwordShows.forEach(function(passwordShow){
        passwordShow.addEventListener("click",function(e){
            const showStyle = e.currentTarget.classList
            if(showStyle.contains("one")){
                signupPassword.setAttribute("type","name")
                passwordShow.style.display = "none"

                // for the hide button to work is depending on the show
                passwordHides.forEach(function(passwordHide){
                    const styles = passwordHide.classList
                    if(styles.contains("first")) {
                        passwordHide.style.display = "block"
                    }
                })
            }
            
        })        
    })    


    passwordHides.forEach(function(passwordHide){
        passwordHide.addEventListener("click",function(e){
            const showStyle = e.currentTarget.classList
            if(showStyle.contains("first")){
                signupPassword.setAttribute("type","password")
                passwordHide.style.display = "none"

                // for the show button to work is depending on the hide
                passwordShows.forEach(function(passwordShow){
                    const styles = passwordShow.classList
                    if(styles.contains("one")) {
                        passwordShow.style.display = "block"
                    }
                })
            }
            
        })        
    })

    // CONFIRM PASSWORD PART
    passwordShows.forEach(function(passwordShow){
        passwordShow.addEventListener("click",function(e){
            const showStyle = e.currentTarget.classList
            if(showStyle.contains("two")){
                confirmPassword.setAttribute("type","name")
                passwordShow.style.display = "none"

                // for the hide button to work is depending on the show
                passwordHides.forEach(function(passwordHide){
                    const styles = passwordHide.classList
                    if(styles.contains("second")) {
                        passwordHide.style.display = "block"
                    }
                })
            }
        })    
    })

    passwordHides.forEach(function(passwordHide){
        passwordHide.addEventListener("click",function(e){
            const showStyle = e.currentTarget.classList
            if(showStyle.contains("second")){
                confirmPassword.setAttribute("type","password")
                passwordHide.style.display = "none"

                // for the hide button to work is depending on the show
                passwordShows.forEach(function(passwordShow){
                    const styles = passwordShow.classList
                    if(styles.contains("two")) {
                        passwordShow.style.display = "block"
                    }
                })
            }
        })    
    })

    // LOGINNNNNN PASSWORD PART
    passwordShows.forEach(function(passwordShow){
        passwordShow.addEventListener("click",function(e){
            const showStyle = e.currentTarget.classList
            if(showStyle.contains("three")){
                signinPassword.setAttribute("type","name")
                passwordShow.style.display = "none"

                // for the hide button to work is depending on the show
                passwordHides.forEach(function(passwordHide){
                    const styles = passwordHide.classList
                    if(styles.contains("third")) {
                        passwordHide.style.display = "block"
                    }
                })
            }
        })    
    })

    passwordHides.forEach(function(passwordHide){
        passwordHide.addEventListener("click",function(e){
            const showStyle = e.currentTarget.classList
            if(showStyle.contains("third")){
                signinPassword.setAttribute("type","password")
                passwordHide.style.display = "none"

                // for the hide button to work is depending on the show
                passwordShows.forEach(function(passwordShow){
                    const styles = passwordShow.classList
                    if(styles.contains("three")) {
                        passwordShow.style.display = "block"
                    }
                })
            }
        })    
    })
