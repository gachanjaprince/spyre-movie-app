$(document).ready(function () {
    $('#title').autocomplete({
        source: async function(request,response) {
            console.log(request.term)
            let data= await fetch(`https://happy-umbrella-bass.cyclic.app/search?query=${request.term}`)
                    .then(results => results.json())
                    .then(results => results.map(result => {
                        return {
                            label: result.title,
                            value: result.title,
                            id: result._id
                        }
                    }))
                response(data)
                //console.log(response)
        },
        minLength: 2,
        select: function(event, ui) {
            console.log(ui.item.id)
            fetch(`https://happy-umbrella-bass.cyclic.app/get/${ui.item.id}`)
                .then(result => result.json())
                .then(result => {
                    $('#cast').empty()
                    result.cast.forEach(cast => {
                            $('#cast').append(`<li>${cast}</li>`)
                        })
                    $('img').attr('src', result.poster)
                })
        }
    })
})