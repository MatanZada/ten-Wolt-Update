$(function () {

    $('#btnFindAll').click(function () {
        $.ajax({
            url: '/find-allStore',
            type: 'GET',
            success: function (result) {
                $.each(result, function (_, value) {
                    $('#getStore').append($("<option></option>")).attr("value", value._id).text(`store: ${value.name} id Store: ${value._id}`)
                })
            }
        });
    })

    $('#btnFindByid').click(function () {
        let storeNames = $('[data-role="findById"]').val()
        $.ajax({
            url: '/order/:id',
            method: 'PUT',
            data: {
                name: storeNames
            },
            success: function (result) {
                console.log(result);
                document.getElementById("getIDStore").textContent = JSON.stringify(result, undefined, 2);
            }
        });
    })
})