$().ready(function() {

    $(".active--loading").addClass('d-block');
    $('html, body').css({ overflow: 'hidden', height: '100%'}).scrollTop(0);

    // alert("Holaaa");
    let i = 0;
    let data = setInterval(() => {
        i++;
        console.log(i);
        $("#progress--loading").css("width", i+"%").attr("aria-valuenow", i);
        $("#text--percentage").text(i+"%");
        if (i === 100) {
            clearInterval(data);
            setTimeout(() => {
                // $(".active--loading").addClass('animate__animated animate__fadeOut');
                $(".active--loading").addClass('d-none');
                $('html, body').css({ overflow: 'auto', height: 'auto'});
                i = 0;
                return false;
            }, 2000);
        }
    }, 30);

});
// (() => {
    
// })();