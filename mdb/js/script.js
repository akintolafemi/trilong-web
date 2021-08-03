/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


localStorage['theme'];

$(document).ready(function () {

    let theme = localStorage['theme'] || '1';

    if (theme === '-1') {
      $('footer, .card').toggleClass('dark-card-admin');
      $('body, .navbar').toggleClass('white-skin navy-blue-skin');
      $(this).toggleClass('white text-dark btn-outline-black');
      $('body').toggleClass('dark-bg-admin');
      $('h6, .card, p, td, th, i, li a, h4, input, label').not('#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
      $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
      $('.gradient-card-header').toggleClass('white black lighten-4');
      $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');
      $(".list-group-item").toggleClass("dark-card-admin");
    }
    else {

    }


    // SideNav Button Initialization
    $(".button-collapse").sideNav();
    // SideNav Scrollbar Initialization
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(sideNavScrollbar);
    $('.mdb-select').materialSelect();

    $(function() {
        $('#dark-mode').on('click', function (e) {
            e.preventDefault();

            let theme = localStorage['theme'] || '1';
            if (theme === '1')
              localStorage['theme'] = '-1';
            else
              localStorage['theme'] = '1';

            $('footer, .card').toggleClass('dark-card-admin');
            $('body, .navbar').toggleClass('white-skin navy-blue-skin');
            $(this).toggleClass('white text-dark btn-outline-black');
            $('body').toggleClass('dark-bg-admin');
            $('h6, .card, p, td, th, i, li a, h4, input, label').not('#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
            $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
            $('.gradient-card-header').toggleClass('white black lighten-4');
            $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');
            $(".list-group-item").toggleClass("dark-card-admin");
        });
    });

    var date = new Date();
    $("#span_year").html(date.getFullYear());

});


// Tooltips Initialization
$(function () {
      $('[data-toggle="tooltip"]').tooltip();
});
