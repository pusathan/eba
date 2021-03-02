
var selectedIndex = -1;
var totalSuggestion = 6;
var getUrl = 'https://ders.eba.gov.tr/suggest';

$(document).ready(function () {
    var q = getURLParameter('q');
    var searchingWord = document.getElementById("searchingWord");
    if(q)
        searchingWord.value = q;
});

$('#searchingWord').on('click', function (e) {
    e.preventDefault();
});

$(".searchBtn").click(function () {
    var searchingWord;
    searchingWord = document.getElementById("searchingWord").value;
    if(searchingWord.length > 2)
        window.location.href = "arama" + "?q=" + searchingWord;
    // else
    //     alert("Arama yapabilmek için en az 2 karakter girmelisiniz");
});

$('#searchingWord').keyup(function (event) {
    event.preventDefault();
    if (event.keyCode == 13 || event.keyCode == 9) {
        //$("#sitearama").click();
        var searchingWord = document.getElementById("searchingWord").value;
        if (searchingWord.length > 2)
            window.location.href = "arama" + "?q=" + searchingWord;
    } else if (event.keyCode == 27) { //esc
        $('.suggests').removeClass("active");
        return true;
    } else if (event.keyCode == 38) { //up
        upKeyPressed();
        return true;
    } else if (event.keyCode == 40) { //down
        downKeyPressed();
        return true;
    } else if ($('#searchingWord').val().length == 0) { //down
        $('.suggests').removeClass("active");
        $("#searchClearBtn").hide();
        return true;
    } else {
        suggest();
        var selectedIndex = 0;
    }
    $("#searchClearBtn").show();
    $("#searchClearBtn").click(function () {
        $('#searchingWord').val('');
        $('.suggests').removeClass("active");
        $("#searchClearBtn").hide();
        $('#searchingWord').focus();
    });
});

function suggest() {
    var searchField = $('#searchingWord').val();
    if (searchField.length > 1) {
        selectedIndex = -1;
        totalSuggestion = 6;
        var url = "arama?q=";
        var p = $.getJSON(getUrl+'?rownumber=8&searchtext=' + searchField, function (data) {
            $('.suggests').addClass("active");
            var i = 0;
            var suggest = '<ul>';
            $.each(data.suggestList, function(key, val) {
                suggest += '<li class="suggest suggest_' + key + '"> <a href="' + url + val + '">' + val + '</a></li>';
                i++;
            });
            suggest += '</ul>';
            selectedIndex = 0;
            totalSuggestion = i;
            $('.suggests').html(suggest);
            if (data.suggestList == "")
                $('.suggests').removeClass("active");
        });
        setTimeout(function(){ p.abort(); }, 3000);
    }
}

function upKeyPressed() {
    if (!$('.suggests').hasClass("active")) {
        $('.suggests').addClass("active");
    } else {
        $('.suggests').addClass("active");
        if (selectedIndex > 0) {
            selectedIndex--;
            $('#searchingWord').val($('.suggest_' + selectedIndex + ' a').html());
            $('.suggests ul li').removeClass("selectedSuggestion");
            $('.suggest_' + selectedIndex).addClass("selectedSuggestion");
        }
    }
}

function downKeyPressed() {
    if (!$('.suggests').hasClass("active")) {
        $('.suggests').addClass("active");
    } else {
        $('.suggests').addClass("active");
        if (selectedIndex != totalSuggestion) {
            $('#searchingWord').val($('.suggest_' + selectedIndex + ' a').html());
            $('.suggests ul li').removeClass("selectedSuggestion");
            $('.suggest_' + selectedIndex).addClass("selectedSuggestion");

            selectedIndex++
        }
    }
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null

}
