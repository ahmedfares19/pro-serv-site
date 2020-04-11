$('.messanger__header').click(()=>{
    $('.messanger__body').toggleClass('hideMessanger');
    $('.messanger__header').toggleClass('messangerHeaderToggle');
})
$('.messanger__body button:nth-child(1)').click(()=>{
    $('.messanger__body').toggleClass('hideMessanger');
    $('.messanger__header').toggleClass('messangerHeaderToggle');
})

const t = $('#msg_num').text();
if((+t) <= 0) {
    $('#msg_num').css('display','none')
};