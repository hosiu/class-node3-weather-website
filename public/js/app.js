//client side javascript

console.log("client-side javascript is loaded")

// fetch('http://puzzle.mead.io/puzzle').then((respond) => {
//     respond.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=Lethbridge').then((respond) => {
//     respond.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.temperature.temperature)
//             console.log(data.temperature.feelsLike)
//             console.log(data.temperature.desc)
//         }

//     })
// })

// fetch('http://localhost:3000/weather?address=Lethbridge').then((respond) => {
//     respond.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.temperature.temperature)
//             console.log(data.temperature.feelsLike)
//             console.log(data.temperature.desc)
//         }

//     })
// })


const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const messageOne = document.querySelector('#msg1')

const messageTwo = document.querySelector('#msg2')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'

    messageTwo.textContent = ''

    if (!location) {
        console.log("Location cannot be empty.")
        messageOne.textContent = 'Location cannot be empty.'
        messageTwo.textContent = ''
    } else {
        const host = 'localhost:3000'
        // const url = 'http://' + host + '/weather?address=' + location
        const url = '/weather?address=' + location
        fetch(url).then((respond) => {
            respond.json().then((data) => {
                if (data.error) {
                    console.log(data.error)
                    messageOne.textContent = data.error
                } else {
                    console.log(data.location)
                    console.log(data.temperature.temperature)
                    console.log(data.temperature.feelsLike)
                    console.log(data.temperature.desc)
                    console.log(data.temperature.humidity)
                    messageOne.textContent = data.location
                    messageTwo.textContent = 'Current temp. is ' + data.temperature.temperature + 'C, but feel like ' + data.temperature.feelsLike + 'C and the humidity is ' + data.temperature.humidity + '%. Generally, it is ' + data.temperature.desc
                }
            })
        })
    }

})