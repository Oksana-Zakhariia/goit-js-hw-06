const formRef = document.querySelector('.login-form')
console.log(formRef);
formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    
    const { password, email } = event.currentTarget.elements
    if (email.value.length === 0 || password.value.length === 0) {
       alert("Заповніть, будь ласка, всі поля форми" )
    } else {
        const answer = {}
        answer.email = email.value, 
        answer.password = password.value
        
        event.currentTarget.reset()
        console.log(answer)
    }
}
