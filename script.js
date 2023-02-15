function verify() {
    // This part of the code gets the current year. 
    var data = new Date()
    var year = data.getFullYear()

    // This part of the code gets the year that the user will put in the form.
    var formYear = window.document.getElementById('textoAno')
    var result = window.document.querySelector('div#result')

    if (formYear.value.length == 0 || Number(formYear.value) > year) {
        window.alert('[ERROR] Look the data over and try again!')
    } else {
        var formSex = window.document.getElementsByName('radsex')
        var age = year - Number(formYear.value)
        //result.innerHTML = `Idade: ${age}`

        var gender = ''

        // I am locating the image in the two following lines
        var image = document.createElement('img')
        image.setAttribute('id', 'photo')

        if (formSex[0].checked) {
            gender = 'Man'
            if (age >= 0 && age < 8) {
                // child
                image.setAttribute('src', 'maleboy.png')
            } else if (age < 13) {
                // teen
                image.setAttribute('src', 'teenBoy.png')
            } else if (age < 20) {
                image.setAttribute('src', 'teenagerBoy.png')
            } else if (age < 35) {
                image.setAttribute('src', 'youngmannew.png')
            } else if (age < 50) {
                // adult
                image.setAttribute('src', 'adultman.png')
            } else {
                //elderly
                image.setAttribute('src', 'elderlyman.png')
            }
        } else if (formSex[1].checked) {
            gender = 'Woman'
            if (age >= 0 && age < 8) {
                // child
                image.setAttribute('src', 'femaleKid.png')
            } else if (age < 13) {
                //teen
                image.setAttribute('src', 'teenGirl.png')
            } else if (age < 20) {
                image.setAttribute('src', 'teenagerGirl.png')
            } else if (age < 35) {
                // young
                image.setAttribute('src', 'youngWoman.png')
            } else if (age < 50) {
                // adult
                image.setAttribute('src', 'middleAgedWoman.png')
            } else {
                //elderly
                image.setAttribute('src', 'oldWoman.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `It's a ${gender} with ${age} years old`
        result.appendChild(image)
    }
}