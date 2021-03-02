if (!window.jQuery) {
            var jqueryScript = document.createElement('script');
            jqueryScript.type = "text/javascript";
            jqueryScript.src = "https://cdnvideo.eba.gov.tr/cbot/jquery-3.2.1.min.js";
            document.getElementsByTagName('head')[0].insertBefore(jqueryScript, document.getElementsByTagName('head')[0].firstChild);
        }
        var answerisnotdefined_message = ''
        var botlanguage = "tr"
        var clients = {};
        var interval = setInterval(function () {
            if (window.jQuery) {
                clearInterval(interval);
                clients = {
 "opening_delay": 0,
 "color": "#6666ff",
 "welcome_message": "EBA uzaktan eğitim sanal asistanına hoş geldiniz. EBA, EBA TV ile ilgili sorularınızı yanıtlamak i&ccedil;in buradayım.&nbsp;",
 "help_text": "Size EBA ile ilgili aşağıdaki ve benzeri konularda yardımcı olabilirim:&nbsp;<ul>\t<li>Haftalık ders programı</li>\t<li>Şifre nasıl alabilirim?</li>\t<li>EBA&#39;yı kimler kullanabilir?</li>\t<li>Telefon uygulaması var mı?</li>\t<li>EBA&rsquo;yı hangi saatlerde kullanabilirim?</li>\t<li>T&uuml;m m&uuml;fredat EBA&rsquo;da var mı?</li>\t<li>Canlı sınıf nedir?</li>\t<li>Ders dışı etkinlikler neler?</li>\t<li>EBA TV&nbsp;yayın akışı</li>\t<li>EBA TV uydu ayarları</li></ul>",
 "trigger_messages": "",
 "avatar": "https://cdnvideo.eba.gov.tr/cbot/eba-asistan-logo-v2.png",
 "icon": "https://cdnvideo.eba.gov.tr/cbot/eba-asistan-logo-v2.png",
 "title_font_color": "#ffffff",
 "bot_name": "EBA Asistan"
};
                var head = document.getElementsByTagName('head')[0];
                var s = document.createElement("script");
                s.type = "text/javascript";
                var i = 0;

                
                cbot_init(clients.icon, clients.icon, clients.color+'', clients.title, clients.color+' !important', 'eba', undefined, clients.opening_delay, clients.welcome_message, clients.help_text, (clients.trigger_messages || []),true,100,300);

            }
        }, 100);
        /**
 * CBot Widget
 * */


var rootAddress = "https://ebaasistan.eba.gov.tr";
//var rootAddress = "https://ebaasistan.eba.gov.tr";
var soc_connect = "https://test.cbot.ai";
//var soc_connect = "http://localhost:5000";

var emojies = [":)", ":-)", ":D", ":-D", ":-(", ":()", ":(", "<3", ":>", "0_0", "0_o", "o_o", "o_0", ":p", ";)"];
var emojiIcons = ["😊", "😊", "😂", "😂", "😞", "😮", "😞", "❤️", "😊", "👀", "👀", "👀", "👀", "😋", "😉"];

//CSS dosyası ekleniyor
addCssFile('cbot-style');

/* do not comment it */
window.dataLayer = window.dataLayer || [];

/* var socketIO = document.createElement('script');
socketIO.type = "text/javascript";
//socketIO.src = "http://test.cbot.ai:5000/socket.io/socket.io.js";
socketIO.src = rootAddress + "/socket.io/socket.io.js";


document.getElementsByTagName('head')[0].insertBefore(socketIO, document.getElementsByTagName('head')[0].firstChild);
 */
if (!window.jQuery) {
    var jqueryScript = document.createElement('script');
    jqueryScript.type = "text/javascript";
    jqueryScript.src = "https://cdnvideo.eba.gov.tr/cbot/jquery-3.2.1.min.js";
    jqueryScript.async = true;
    document.getElementsByTagName('head')[0].insertBefore(jqueryScript, document.getElementsByTagName('head')[0].firstChild);
}

function runGAScript(UAId) {
    var gaScript = document.createElement('script');
    gaScript.type = "text/javascript";
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + UAId;
    document.getElementsByTagName('head')[0].insertBefore(gaScript, document.getElementsByTagName('head')[0].firstChild);
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());

    gtag('config', UAId);
}

var bodyDefaultOverflow;
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function gtag() { dataLayer.push(arguments); }

function numberToString(data) {
    if (data && typeof data == "number") {
        return data.toString();
    }
    if (!data || data == null || data == undefined) {
        return "";
    }
    return data;
}

function sendUrlsToGA(text) {
    text = numberToString(text)
    var urls = (text || "").match(/(http[^\s'"]*)/g);
    for (var j = 0; urls && j < urls.length; j++) {
        gtag('event', 'cbot', {
            'event_category': 'cbot-link',
            'event_action': urls[j],
            'event_label': urls[j]
        });
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getParameterFromScript(name) {
    var script = document.getElementById("cbot-widget-script");
    if (script) {
        return script.getAttribute(name) || ""
    }
    else {
        return "";
    }

}

function clickButton(type, button_url, title) {
    if (button_url) button_url = button_url.getAttribute('href');
    analytic({
        'type': type,
        'url': button_url || null,
        'title': title,
        'userId': userId,
        'date': new Date()
    })
}


function clickTheURLs(el) {
    var url = el.getAttribute('href');
    console.log("clickTheURLs", url);
    gtag('event', 'cbot', {
        'event_category': 'cbot-link',
        'event_action': "click",
        'event_label': url
    })
}

/* var socketIO = document.createElement('script');
socketIO.type = "text/javascript";
socketIO.src = rootAddress + "/js/socket.io-1.4.4.js";
document.getElementsByTagName('head')[0].insertBefore(socketIO, document.getElementsByTagName('head')[0].firstChild); */

var userId;
var sessionId;
var trigger_messages_count = 0;
var CLIENT = "cbot";
var surveyTimeout, sentSurvey = false,
    showedSurvey = null,
    lastRequestTime;

var config = {};
var intents = [];
var isOpen = false;
var interval;
var ua = navigator.userAgent;
var iOS = /iPad|iPhone|iPod/.test(ua);
var iOS11 = /OS 11(_[0-3])*/.test(ua);

function cbot_init(robotImageURL, dialogImageURL, dialogButtonColor, dialogTitle, chooseButtonColor, client, justLink, time, welcomeMessage, helpText, trigger_messages, scrollProp, scrollTop, inputMaxLen) {
    dialogTitle = dialogTitle || clients.bot_name || "Cbot";
    interval = setInterval(function () {
        if ( /* window.io &&  */ window.jQuery) {
            init(robotImageURL, dialogImageURL, dialogButtonColor, dialogTitle, chooseButtonColor, client, justLink, time, welcomeMessage, helpText, trigger_messages, false, scrollTop, inputMaxLen);
            clearInterval(interval);
            interval = null;
        } else { }
    }, 1000);

}



function scrollFunction(scrollTop) {
    if (document.body.scrollTop > scrollTop || document.documentElement.scrollTop > scrollTop) {
        if ((document.getElementById("regular-scroll") || {}).className) document.getElementById("regular-scroll").style.setProperty("bottom", "54px");
        if ((document.getElementById("close-scroll") || {}).className) document.getElementById("close-scroll").style.setProperty("bottom", "54px");
        if ((document.getElementById("dialog-scroll") || {}).className) {
            if (!isMobile.any()) document.getElementById("dialog-scroll").style.setProperty("bottom", "119px");
            if (window.innerWidth <= 800) {
                document.getElementById("dialog-scroll").style.setProperty("bottom", null);
            }

        }
    } else {
        if ((document.getElementById("regular-scroll") || {}).className) document.getElementById("regular-scroll").style.setProperty("bottom", null);
        if ((document.getElementById("close-scroll") || {}).className) document.getElementById("close-scroll").style.setProperty("bottom", null);
        if ((document.getElementById("dialog-scroll") || {}).className) document.getElementById("dialog-scroll").style.setProperty("bottom", null);
    }
}

function popupwindow(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

var cbotModal;

var cbotModalImg;
var captionText;
var mobileLogin;
var socket;
function init(robotImageURL, dialogImageURL, dialogButtonColor, dialogTitle, chooseButtonColor, client, justLink, time, welcomeMessage, helpText, trigger_messages, scrollProp, scrollTop, inputMaxLen) {
    if (!inputMaxLen) inputMaxLen = 300;
    //console.log("init", arguments);
    if (!time) time = 1;


    var open = getParameterByName("open"); // URL - widget instantly opens after loaded
    var data_open = getParameterFromScript("data-open"); // widget instantly opens after loaded
    var data_mobileapp = getParameterFromScript("data-mobileapp"); // for mobile apps
    var data_hide_help = getParameterFromScript("data-hide-help"); // optional hide help when mobile app is on
    var data_hide_logo = getParameterFromScript("data-hide-logo"); // optional hide help when mobile app is on
    var data_full_page = getParameterFromScript("data-full-page"); // optional hide help when mobile app is on

    if (data_full_page == "true")
        addCssFile('cbot-style-fullpage', Math.random());

    if (data_open == "true" || open == "true")
        data_open = true;
    else
        data_open = false;


    if (data_mobileapp == "true") {
        data_open = true;
        data_mobileapp = true;
    }
    else data_mobileapp = false;


    if (data_hide_help == "true")
        data_hide_help = true;
    else data_hide_help = false;


    if (data_hide_logo == "true")
        data_hide_logo = true;
    else data_hide_logo = false;

    if (client) CLIENT = client;
    mobileLogin = getParameterFromScript("data-session");

    //CSS dosyası ekleniyor
    addCssFile('cbot-style-' + CLIENT, Math.random());

    var helpContent = helpText;

    userId = Math.floor(Math.random() * 100000000) + 999999;
    sessionId = Date.now();

    if (!userId) {
        userId = Math.floor(Math.random() * 100000) + 1;
        localStorage["cbot-" + CLIENT + '-userid'] = userId;
    }

    if (scrollProp) {
        window.onscroll = function () { scrollFunction(scrollTop) };

        window.onresize = function () {

            if (document.getElementById("dialog-scroll") && document.getElementById("dialog-scroll").className) {
                scrollFunction(scrollTop);
                if (window.innerWidth <= 800) {
                    document.getElementById("dialog-scroll").style.setProperty("bottom", null);
                }
            }
        };
    }
    setTimeout(function () {
        /* socket = io.connect(soc_connect, { transports: ["websocket"], secure: true, upgrade: false });
        socket.on('connect', function () {
            socket.emit('new_client', userId);
            console.log("CONNECT: ", userId);
        });
        socket_connection_widget();
        soc_cli_data();
        soc_survey();
        soc_stop();
        soc_client_typing(); */
        if (dialogButtonColor && typeof dialogButtonColor == "string" && dialogButtonColor.indexOf("#") == -1) {
            dialogButtonColor = "#" + dialogButtonColor;
        }
        config = {
            robotImageURL: robotImageURL,
            dialogImageURL: dialogImageURL,
            dialogButtonColor: dialogButtonColor,
            chooseButtonColor: chooseButtonColor,
            dialogTitle: dialogTitle,
            title_font_color: clients.title_font_color,
            client: CLIENT
        };

        let display_none = "display: none;"
        let display_block = "display: block;";

        if (!justLink) {
            //Dialog elementleri sayfaya ekleniyor!

            $('body').append(
                '<div id="close-scroll" class="cbot-dialog-button-close" style="' + ((data_open && !data_mobileapp) ? display_block : display_none) + '; background-color:' + config.dialogButtonColor + '"></div>' +
                '<div id="regular-scroll" class="cbot-dialog-button-regular bounce" style="' + (data_open ? display_none : display_block) + 'background-size:100%; background-image: url(\'' + config.dialogImageURL + '\');"></div>');
        }
        $('head').append('"<style>.cbot-help-icon:hover {background: ' + dialogButtonColor + '}</style>"')
        // config.robotImageURL 
        var appendHtmL = '' +
            '<div id="cbot-modal" class="cbot-modal">' +
            '<span class="cbot-modal-close">&times;</span>' +
            '<img class="cbot-modal-content" id="cbot-modal-image">' +
            '</div >' +
            '<div id="dialog-scroll" class="cbot-dialog" style="' + (data_open ? display_block : display_none) + '">' +
            '<div class="cbot-dialog-head" style="background: ' + dialogButtonColor + ' !important;' + (data_mobileapp ? display_none : display_block) + '">' +
            '<div class="cbot-avatar"><img src="' + "https://cdnvideo.eba.gov.tr/cbot/eba-asistan-logo-v2.png" + '" draggable="false"/></div>' +
            '<span class="cbot-dialog-title" style="color: ' + config.title_font_color + '">' + config.dialogTitle + '</span></div>';
        if (!data_full_page) {
            appendHtmL += '<div class="cbot-remove" style="background:rgba(255,255,255,.15);' + (data_mobileapp ? display_none : '') + '">Kapat</div>';
        }
        appendHtmL += '<div class="cbot-help-icon" id="cbot-help-icon" style="' + (data_hide_help ? display_none : display_block) + '">?</div>' +
            '<div class="cbot-help" style="display:none;" id="cbot-help">' +
            '<div class="cbot-help-content">' +
            helpContent +
            '</div>' +
            '</div>' +
            '<ul class="cbot-chat" id="cbot-chat">' +
            '<div class="cbot-survey"><div class="cbot-survey-text">Yapmış olduğunuz görüşmeyi değerlendirebilir misiniz?</div></div>' +
            '</ul> ' +
            '<form id="cbot-form" action="" onsubmit="return false;">' +
            '<div class="cbot-form-message-area">';

        if (!(iOS && iOS11)) {
            appendHtmL += '<button id="cbot-send-button" class="cbot-send-button"></button>'
        }
        appendHtmL += '<textarea rows="4" style="" class="textarea" maxlength="' + inputMaxLen + '" autocomplete="off" id="cbot-form-message" type="text" placeholder="' + (botlanguage == "en" ? "Type your message here..." : "Mesajınızı buraya yazınız!") + '"></textarea> ' +
            '</div></form>';

        if (!data_hide_logo)
            appendHtmL += '<div class="cbot-powered-by" style="width:100%; text-align:center; line-height:0; position:absolute; bottom:3px;"><a href="https://www.cbot.ai/tr/anasayfa" target="_blank"><img src="https://cdnvideo.eba.gov.tr/cbot/powered-by-cbot-black.png" style="width: 130px;"></a></div>';

        appendHtmL += "</div>";
        $('body').append(appendHtmL);

        $(".cbot-dialog-button").animate({
            right: "+=270"
        }, 1000, function () {
            //console.log("cbot-dialog-button animate completed");
        });

        $(document).on("click", "#cbot-close-button", function () {
            $(".cbot-dialog-button").animate({
                right: "-=270"
            }, 1000, function () {
                fadeIn(elCbotDialogRegularButton);
            });
        });





        $(document).on("click", "#cbot-open-button", function () {
            fadeOut(elCbotDialogButton);
            fadeIn(elCbotDialogButtonClose);
            fadeIn(elCbotDialog);
            setTimeout(function () {
                elCbotFormMessage.focus();
                //console.log("SCROLL 1");
                $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000, function () {
                    //console.log("SCROLL 1 DONE!");
                    //console.log("STOP: ", $('#cbot-chat').prop("scrollHeight"));
                });
                // elCbotChat.scrollTop = 5000000;
                runGAScript("UA-132074922-3");
                if (Array.isArray(trigger_messages) && trigger_messages.length > 0 && trigger_messages[0] != "" && trigger_messages_count == 0) {
                    // if (trigger_messages[0].indexOf("trigger#") >= 0) {
                    var message = trigger_messages[0].split("#")[1];
                    trigger_messages_count++;
                    sendPost({
                        senderName: "User_" + userId,
                        userId: userId,
                        sessionId: sessionId,
                        message: message,
                        is_triggered: true,
                        intents: intents,
                        live_chat: isLive,
                        client: config.client
                    }, function (data) {
                        elCbotFormMessage.value = "";
                        elCbotFormMessage.removeAttribute('disabled');
                        if (document.getElementById("cbot-send-button"))
                            document.getElementById("cbot-send-button").removeAttribute('disabled');
                        elCbotFormMessage.focus();
                        var element = document.getElementById('cbot-chat');
                        if (data) {
                            intents = data.intents;
                            appendMessageToDialogBox(data.message, "cbot-other", null, function () {
                                setClickEventToInteractiveButtons(data.userId);
                                if (data.survey) {
                                    surveyTrigger(data.survey, data.userId);
                                }
                            });
                        } else {
                            appendMessageToDialogBox("Mesaj zaman aşımına uğradı!", "cbot-other", null);
                        }
                    });
                }
            }, 200);

        });

        $(document).on("click", ".cbot-dialog-button-regular", function (elem) {
            try {
                // force close ad
                $(".modal.fade.ec-modal.in").css("display", "none");
                $(".modal.fade.ec-modal.in").find(".close").click();
            } catch (error) {
                console.log(error)
            }
            // lock body
            if (isMobile.any()) {
                bodyDefaultOverflow = $("body").attr("overflow");
                $("body").css("overflow", "hidden");
            }
            fadeOut(elCbotDialogRegularButton);
            fadeIn(elCbotDialogButtonClose);
            fadeIn(elCbotDialog);
            runGAScript("UA-132074922-3");
            setTimeout(function () {
                elCbotFormMessage.focus();

                if (Array.isArray(trigger_messages) && trigger_messages.length > 0 && trigger_messages[0] != "" && trigger_messages_count == 0) {
                    // if (trigger_messages[0].indexOf("trigger#") >= 0) {
                    var message = trigger_messages[0]; //trigger_messages[0].split("#")[1];
                    trigger_messages_count++;

                    sendPost({
                        senderName: "User_" + userId,
                        userId: userId,
                        sessionId: sessionId,
                        message: message,
                        is_triggered: true,
                        intents: intents,
                        live_chat: isLive,
                        client: config.client
                    }, function (data) {
                        elCbotFormMessage.value = "";
                        elCbotFormMessage.removeAttribute('disabled');
                        if (document.getElementById("cbot-send-button"))
                            document.getElementById("cbot-send-button").removeAttribute('disabled');
                        elCbotFormMessage.focus();
                        var element = document.getElementById('cbot-chat');
                        if (data) {
                            intents = data.intents;
                            appendMessageToDialogBox(data.message, "cbot-other", null, function () {
                                setClickEventToInteractiveButtons(data.userId);
                                if (data.survey) {
                                    surveyTrigger(data.survey, data.userId);
                                }
                            });
                        } else {
                            appendMessageToDialogBox("Mesaj zaman aşımına uğradı!", "cbot-other", null);
                        }
                    });
                }

                $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000, function () {
                    //console.log("SCROLL 2 DONE!");
                    //console.log("STOP: ", $('#cbot-chat').prop("scrollHeight"));
                });

            }, 200);
        });

        var elCbotDialogButton = document.getElementsByClassName('cbot-dialog-button')[0];
        var elCbotDialogRegularButton = document.getElementsByClassName('cbot-dialog-button-regular')[0];

        var elCbotDialog = document.getElementsByClassName('cbot-dialog')[0];
        var elCbotDialogButtonClose = document.getElementsByClassName('cbot-dialog-button-close')[0];
        var elCbotDialogHead = document.getElementsByClassName('cbot-dialog-head')[0];
        var elCbotRemove = document.getElementsByClassName('cbot-remove')[0];
        var elCbotForm = document.getElementById('cbot-form');
        var elCbotFormMessage = document.getElementById('cbot-form-message');
        var elCbotChat = document.getElementsByClassName('cbot-chat')[0];
        var elCbotHelpIcon = document.getElementById('cbot-help-icon');
        var elCbotHelp = document.getElementById('cbot-help');
        cbotModal = document.getElementById("cbot-modal");

        // var open = getParameterByName("open");
        // var data_open = getParameterFromScript("data-open");
        // try {
        //     if (open == "true" || data_open == "true" || IS_OPENED) {
        //         elCbotDialogRegularButton.click();
        //     }
        // } catch (err) {

        // }

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        cbotModalImg = document.getElementById("cbot-modal-image");


        var span = document.getElementsByClassName("cbot-modal-close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            cbotModal.style.display = "none";
        }
        // Get the <span> element that closes the modal
        /* var span = document.getElementsByClassName("cbot-modal-close")[0]; */
        // When the user clicks on <span> (x), close the modal
        /*  span.onclick = function () {
             modal.style.display = "none";
         } */
        welcomeMessage = welcomeMessage || "Hoş geldiniz.";
        appendMessageToDialogBox(welcomeMessage, "cbot-other", null);


        elCbotHelpIcon.onclick = function () {

            if (elCbotHelp.style.display == "none") {
                slideIn(elCbotHelp);
            } else {
                slideOut(elCbotHelp);
            }

        }

        $(document).on("focus", "#cbot-form-message", function () {
            slideOut(elCbotHelp);
        });

        elCbotDialogButtonClose.onclick = function () {
            if (isMobile.any())
                $("body").css("overflow", bodyDefaultOverflow || "auto");
            fadeOut(elCbotDialogButtonClose);
            fadeIn(elCbotDialogRegularButton);
            fadeOut(elCbotDialog);
        }

        elCbotDialogHead.onclick = function () {
            if (!data_full_page) {
                if (isMobile.any())
                    $("body").css("overflow", bodyDefaultOverflow || "auto");
                fadeIn(elCbotDialogRegularButton);
                fadeOut(elCbotDialogButtonClose);
                fadeOut(elCbotDialog);
            }
        }

        if (!data_full_page) {
            elCbotRemove.onclick = function () {
                if (isMobile.any())
                    $("body").css("overflow", bodyDefaultOverflow || "auto");
                fadeIn(elCbotDialogRegularButton);
                fadeOut(elCbotDialogButtonClose);
                fadeOut(elCbotDialog);
            }
        }

        setClickEventToInteractiveButtons(userId);
        $("#cbot-form-message").keypress(function (event) {
            soc_typing(true);
            if (event.which == 13) {
                soc_typing(false);
                event.preventDefault();
                var message = elCbotFormMessage.value;
                //console.log("MESSAGE:", message);
                if (message != "" && !/^\s+$/.test(message) && !/yazıyor\.\.\./i.test(message)) {
                    if (/^([cçÇ]+[ıiİ]*k+([ıiİ]*[sşŞ$]+)?|k+[a@4]*p[a@4]*t+|kend[ıiİ]n[ıiİ] k+[a@4]*p[a@4]*t*)$/i.test(message)) {
                        elCbotFormMessage.value = "";
                        if (isMobile.any())
                            $("body").css("overflow", bodyDefaultOverflow || "auto");
                        fadeOut(elCbotDialogButtonClose);
                        fadeIn(elCbotDialogButton);
                        fadeOut(elCbotDialog);
                    } else {
                        message = cleanTags(message);
                        dialog(userId, message);
                        elCbotFormMessage.setAttribute('disabled', true);
                        if (document.getElementById("cbot-send-button"))
                            document.getElementById("cbot-send-button").setAttribute("disabled", true);
                        elCbotFormMessage.value = 'Yazıyor...';
                    }
                } else {
                    elCbotFormMessage.value = "";
                }
            }
        });
        $("#cbot-form-message").keyup(delay(function (event) {
            soc_typing(false);
        }, 1000))
        $(document).on("click", "#cbot-send-button", function (event) {
            event.preventDefault();
            var message = elCbotFormMessage.value;
            // console.log("MESSAGE:", message);
            if (message != "" && !/^\s+$/.test(message) && !/yazıyor\.\.\./i.test(message)) {
                message = cleanTags(message);
                dialog(userId, message);
                elCbotFormMessage.setAttribute('disabled', true);
                document.getElementById("cbot-send-button").setAttribute("disabled", true);
                elCbotFormMessage.value = 'Yazıyor...';
            } else {
                elCbotFormMessage.value = "";
            }
        });

    }, time * 1000);
}
function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}
function setClickEventToInteractiveButtons(userId) {
    //console.log("setClickEventToInteractiveButtons");
    var elCbotInteractiveButtons = document.getElementsByClassName('postback');
    var btn;
    for (var i = 0; i < elCbotInteractiveButtons.length; i++) {
        btn = elCbotInteractiveButtons[i];
        btn.onclick = function (event) {
            var e = event.target;
            var elCbotInteractiveButtons = document.getElementsByClassName('postback');
            var payload = e.getAttribute('data-payload');
            clickButton("postback", null, payload);
            console.log("PAYLOAD: ", payload, e);
            gtag('event', 'cbot', {
                'event_category': 'cbot-button',
                'event_action': "click",
                'event_label': payload
            })
            dialog(userId, e.innerText, null, payload);
            for (var j = 0; j < elCbotInteractiveButtons.length; j++) {
                e = elCbotInteractiveButtons[j];
                // console.log("BUTTON: ",e.innerText);
                e.disabled = true;
            }
        }
    }
}

function addCssFile(filename, version) {
    var customstyle = document.createElement('link');
    customstyle.rel = "stylesheet";
    customstyle.type = "text/css";
    customstyle.href = 'https://cdnvideo.eba.gov.tr/cbot/' + filename + '.css' + (version ? '?v=' + version : '');
    document.getElementsByTagName('head')[0].appendChild(customstyle);
}

function cleanTags(text) {
    text = (!text || text == "") ? "" : text;
    return text.replace(/[<>\\\|]/g, " ").replace(/<[^>]*>/g, " ").replace(/[\n\r\t]/g, " ").replace("&nbsp;", " ").replace(/\s{2,}/g, " ");
}

function cbotModalImage(url) {
    cbotModal.style.display = "block";
    cbotModalImg.src = url;
}

function sanitize(text, wrongChars, normalChars) {
    if (typeof text == "string" && wrongChars && normalChars && wrongChars.length == normalChars.length) {

        for (var i = 0; i < wrongChars.length; i++) {
            // console.log(new RegExp(wrongChars[i],"gi"));
            text = text.replace(new RegExp(wrongChars[i].replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g, "\\$1"), "gi"), normalChars[i]);
        }

    } else {
        //console.log("sanitize WARNING: wrongChars array's length must be equals to normalChars array");
    }
    return text;
}

function handleAndAddEmoji(userMessage, responseMessage, next) {
    var matches = userMessage.match(new RegExp("(" + emojies.join("|").replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g, "\\$1") + ")", "g"));
    var emoji;
    // console.log("handleAndAddEmoji REGEX: ", new RegExp("("+emojies.join("|").replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g,"\\$1")+")", "g"));
    //console.log("handleAndAddEmoji MATCHES: ", matches);
    if (matches && matches.length > 0 && typeof responseMessage === "string") {
        emoji = matches[0];
        responseMessage += " " + emoji;
        return responseMessage;
    }
    return responseMessage;
}
let auth;
let kvk;
var isLive = false;

function dialog(userId, message, next, payload) {
    //   debugger;
    if (typeof next !== "function") next = function () { };
    appendMessageToDialogBox(message, "cbot-self");
    appendTypingIconToDialogBox("");
    //$('#cbot-chat').append($('<li>').addClass("cbot-self").html('<div class="avatar"><img src="'+rootAddress+'/img/user.png" draggable="false"/></div><div class="cbot-msg">'+message+'</div>'));
    //$("#cbot-chat").scrollTop(50000);
    // addMessageToCache({ senderName: "User_" + userId, userId: userId, message: message, intents: intents, client: config.client });
    var elCbotFormMessage = document.getElementById('cbot-form-message');

    // $.post(rootAddress + "/" + CLIENT, { senderName: "User_" + userId, userId: userId, message: message, intents: intents, client: config.client }, function (data) {
    //console.log("Geldi!!!");
    if (!new RegExp("^(" + emojies.join("|").replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g, "\\$1") + ")$", "ig").test(message)) {
        sendPost({
            senderName: "User_" + userId,
            userId: userId,
            sessionId: sessionId,
            message: payload || message,
            intents: intents,
            client: config.client,
            live_chat: isLive,
            mobileLogin: mobileLogin
        }, function (data) {
            elCbotFormMessage.value = "";
            elCbotFormMessage.removeAttribute('disabled');
            if (document.getElementById("cbot-send-button"))
                document.getElementById("cbot-send-button").removeAttribute('disabled');
            elCbotFormMessage.focus();
            var element = document.getElementById('cbot-chat');
            // element.scrollTop = (element.scrollHeight) - (element.clientHeight - 50);
            // console.log("SCROLL 3");
            // $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000);
            if (data) {
                console.log("dato23", data);
                if (!isLive) {
                    isLive = data.live_chat || false;
                    intents = data.intents;
                    // data.message = handleAndAddEmoji(message, data.message);
                    clearTimeout(auth);
                    if (data.smsAuth == true) {
                        auth = setTimeout(function () {
                            appendMessageToDialogBox(data.smsMessage, "cbot-other", data.category, function () {
                                setClickEventToInteractiveButtons(data.userId);
                            });
                        }, 180000);
                    }
                    clearTimeout(kvk);
                    if (data.kvkConfirm == true) {
                        kvk = setTimeout(function () {
                            appendMessageToDialogBox(data.kvkConfirmMessage, "cbot-other", data.category, function () {
                                setClickEventToInteractiveButtons(data.userId);
                                if (data.survey) {
                                    surveyTrigger(data.survey, data.userId);
                                }
                            });
                        }, 30000);
                    }
                    appendMessageToDialogBox(data.message, "cbot-other", data.category, function () {
                        //console.log("#CALLBACK appendMessageToDialogBox 1");
                        setClickEventToInteractiveButtons(data.userId);
                        console.log("data", data);
                        if (data.survey) {
                            if (data.live_chat) {
                                if (data.live_chat != true) {
                                    surveyTrigger(data.survey, data.userId);
                                }
                            }
                            else {
                                surveyTrigger(data.survey, data.userId);
                            }

                        }

                        next();
                    });
                } else {
                    $(".cbot-typing").remove();
                    socket_widget(data, message);
                    // AI öner sistemi için canlı destekte müşterinin son yazışmasının AI cevabı:
                    if (data.message) {
                        if (!Array.isArray(data.message))
                            data.message = [data.message];
                        var resp_answer = data.message;
                        socket_suggestion(resp_answer[0], data.category, data.userId);
                    }
                }

            } else {
                appendMessageToDialogBox("Mesaj zaman aşımına uğradı!", "cbot-other", null);

                next();
            }
        });
    } else { // Sadece emoji gönderildiyse direkt aynı emoji ile cevap ver!
        //console.log("just emoji");
        setTimeout(function () {
            elCbotFormMessage.value = "";
            elCbotFormMessage.removeAttribute('disabled');
            document.getElementById("cbot-send-button").removeAttribute('disabled');
            elCbotFormMessage.focus();
            appendMessageToDialogBox(message, "cbot-other", null, function () {
                //console.log("#CALLBACK appendMessageToDialogBox 2");
                setClickEventToInteractiveButtons(userId);
            });
        }, 1500);

    }
}
function analytic(info) {
    $.ajax({
        url: rootAddress + "/" + CLIENT + "/analytic",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "CBot-Token": "js9Htgf3bcdvjo5ChxH1Y3w4PTyDsD4m"
        },
        data: JSON.stringify(info),
        success: function (json) {
            //console.log("DATA JSON: ", typeof json, json);
        },
        error: function (err) {
            //next();
        }
    });

}
function sendPost(jsonData, next) {
    jsonData = addSurveyRequestData(jsonData);
    clearSurveyTimeout();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 429)) {
            var json = JSON.parse(this.responseText);
            // console.log("XHR",json, typeof json == "object");
            if (json && typeof json == "object" && Array.isArray(json.message) && json.message.length > 0 && (json.message[0].message == "Answer is not defined" || !json.message[0].message)) {
                json.message[0].message = answerisnotdefined_message || "Answer is not defined";
            }
            next(json);
        } else if (this.readyState == 4) {
            console.log("READY STATE", this.readyState);
            console.log("STATUS", this.status);
            next();
        }
    }
    xhr.open("POST", rootAddress + "/" + CLIENT, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('CBOT-Token', "js9Htgf3bcdvjo5ChxH1Y3w4PTyDsD4m");
    xhr.send(JSON.stringify(jsonData));

}
function surveyTrigger(survey, userId) {
    clearSurveyTimeout();
    console.log("surveyTrigger", survey);
    if (!showedSurvey) {
        surveyTimeout = setTimeout(function () {
            console.log("TIMEOUT", survey);
            let comp = { message_type: "BUTTON_COMPONENT", message: survey.question, buttons: [] };
            for (let i = 0; i < survey.buttons.length; i++) {
                comp.buttons.push({
                    type: "postback",
                    title: survey.buttons[i],
                    payload: survey.buttons[i]
                })
            }
            appendMessageToDialogBox(comp, "cbot-other", "SURVEY", function () {
                setClickEventToInteractiveButtons(userId);
            });
            showedSurvey = survey;
        }, survey.delay * 1000);
    }
}
function clearSurveyTimeout() {
    if (surveyTimeout) {
        clearTimeout(surveyTimeout);
        surveyTimeout = null;
    }
    // showedSurvey = null;
}
function addSurveyRequestData(jsonData) {
    if (showedSurvey && !sentSurvey) { // Anket gönderilmiş ve cevaplanmamışsa, kullanıcı cevabı önce 
        jsonData.is_survey = true;
        jsonData.survey_id = showedSurvey.id;
        jsonData.agent_id = age;
        sentSurvey = true;
    }

    return jsonData;
}
function appendMessageToDialogBox(message, elemClass, category, next) {
    if (!next || typeof next != "function") next = function () { };
    var elCbotChat = document.getElementById('cbot-chat');
    $(".cbot-typing").remove();
    message = sanitize(message, emojies, emojiIcons)
    if (elemClass === "cbot-self") {
        // elCbotChat.innerHTML += '<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message, category) + '</div></li>';
        $('#cbot-chat').append('<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message, category) + '</div></li>');
        //console.log("SCROLL 4");
        $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000, function () {
            //console.log("SCROLL 4 DONE!");
            //console.log("STOP: ", $('#cbot-chat').prop("scrollHeight"));
        });
    } else {

        if (message instanceof Array) {
            //console.log("MESSAGES: ", message);
            var w = 0;
            //console.log(message[i]);
            // elCbotChat.innerHTML += '<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message[w], category) + '</div></li>';
            $('#cbot-chat').append('<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message[w], category) + '</div></li>');
            //console.log("SCROLL 5");
            $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000, function () {
                //console.log("SCROLL 5 DONE!");
                //console.log("STOP: ", $('#cbot-chat').prop("scrollHeight"));
            });
            w++;
            //console.log("W:", w);
            var interval = setInterval(function () {
                //console.log("INTERVAL: ", w, message.length);
                //console.log(message[w]);
                if (w < message.length) {
                    // elCbotChat.innerHTML += '<li class="' + elemClass + '">><div class="cbot-msg">' + generateComponentHTML(message[w], category) + '</div></li>';
                    $('#cbot-chat').append('<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message[w], category) + '</div></li>');
                    w++;
                    //console.log("W ARTTIRILDI!", w);
                    // elCbotChat.scrollTop = 5000000;
                    //console.log("SCROLL 6");
                    $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000, function () {
                        //console.log("SCROLL 6 DONE!");
                        //console.log("STOP: ", $('#cbot-chat').prop("scrollHeight"));
                    });

                    var arrows = document.getElementsByClassName("cbot-arrow");
                    if (arrows && arrows.length > 0) {
                        for (var j = 0; j < arrows.length; j++) {
                            arrows[j].onclick = slide;
                        }
                    }

                } else {
                    //console.log("clearInterval(interval)");
                    clearInterval(interval);
                    next();
                }
            }, 1000);
        } else {

            // elCbotChat.innerHTML += '<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message, category) + '</div></li>';
            $('#cbot-chat').append('<li class="' + elemClass + '"><div class="cbot-msg">' + generateComponentHTML(message, category) + '</div></li>');
            //console.log("SCROLL 7");
            setTimeout(function () {
                //console.log("START: ", $('#cbot-chat').prop("scrollHeight"));
                $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000, function () {
                    //console.log("SCROLL 7 DONE!");
                    //console.log("STOP: ", $('#cbot-chat').prop("scrollHeight"));
                });
            }, 100);
            next();
        }
    }
    // $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000);
    // elCbotChat.scrollTop = 5000000;
    // var x = new EmbedJS({
    //   input: document.getElementsByClassName("cbot-msg")
    // });
    //
    // x.render();
    var arrows = document.getElementsByClassName("cbot-arrow");
    if (arrows && arrows.length > 0) {
        for (var i = 0; i < arrows.length; i++) {
            arrows[i].onclick = slide;
        }
    }
}

function slide(event) {
    event.preventDefault();
    var el = event.target;
    var element = event.target;
    el.onclick = null;
    if (element.nextSibling) {

        while (element.nextSibling.className != "cbot-card-carousel")
            element = element.nextSibling;
        element = element.nextSibling;

        // console.log("SLIDE!", el.className.indexOf("left"));

        if (el.className.indexOf("left") >= 0) { // Sol oka tıklandı

            if (!$(element).css("left") || $(element).css("left") == "auto") {
                $(element).css("left", 0);
                // console.log("ATTR ATANDI");
            }
            // console.log("CARD: ", $(element).html());
            // console.log("LEFT:", +$(element).css("left").replace("px", ""));
            if (+$(element).css("left").replace("px", "") < 0) {
                $(element).animate({
                    "left": "+=255px"
                }, 1000, "swing", function () {
                    el.onclick = slide;
                    // console.log("<<< LEFT", +$(element).css("left").replace("px",""));
                });
            } else {
                el.onclick = slide;
                // console.log("LEFT NOT WORK!", +$(element).css("left").replace("px",""));
            }

        } else { // Sağ oka tıklandı

            if (!$(element).css("left") || $(element).css("left") == "auto") {
                $(element).css("left", 0);
                // console.log("ATTR ATANDI");
            }

            // console.log("RIGHT:",Math.abs(+$(element).css("left").replace("px", "")) + 255, $(element).width());
            if (Math.abs(+$(element).css("left").replace("px", "")) + 255 < $(element).width()) {
                $(element).animate({
                    "left": "-=255px"
                }, 1000, "swing", function () {
                    el.onclick = slide;
                    // console.log(">>>RIGHT", +$(element).css("left").replace("px",""), $(element).width());
                });
            } else {
                el.onclick = slide;
                // console.log("RIGHT NOT WORKING!", +$(element).css("left").replace("px",""), $(element).width());
            }

        }

    }
}
function addMessageToCache(data) {
    var messages = (localStorage[CLIENT + '-messages'] && localStorage[CLIENT + '-messages'] != "") ? JSON.parse(localStorage[CLIENT + '-messages']) : [];
    //if(!messages) messages = [];

    // console.log(messages);
    if (messages.length > 10) {
        messages.splice(0, 1);
        // console.log(messages.length);
    }

    messages.push(data);

    // localStorage['cbot-messages'] = "";
    localStorage[CLIENT + '-messages'] = JSON.stringify(messages);
}
function getMessagesFromCache() {
    var messages = (localStorage[CLIENT + '-messages'] && localStorage[CLIENT + '-messages'] != "") ? JSON.parse(localStorage[CLIENT + '-messages']) : null;

    // console.log("MESSAGES: ",messages);

    if (messages instanceof Array && messages.length > 0) {

        for (var i = 0; i < messages.length; i++) {
            if (messages[i].senderName != 'Bot') {
                appendMessageToDialogBox(messages[i].message, "cbot-self");
                //$('#cbot-chat').append($('<li>').addClass("cbot-self").html('<div class="avatar"><img src="'+rootAddress+'/img/user.png" draggable="false"/></div><div class="cbot-msg">'+messages[i].message+'</div>'));
            } else {
                appendMessageToDialogBox(messages[i].message, "cbot-other");
                //$('#cbot-chat').append($('<li>').addClass("cbot-other").html('<div class="avatar"><img src="'+config.robotImageURL+'" draggable="false"/></div><div class="cbot-msg">'+messages[i].message+'</div>'));
            }
        }
        var elCbotChat = document.getElementsByClassName('cbot-chat')[0];
        // $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000);
        // elCbotChat.scrollTop = 50000;
    }
}
function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.1;

        if (el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        } else {
            el.style.display = 'block';
        }
    };

    tick();
}
function fadeOut(el) {
    el.style.opacity = 1;
    var tick = function () {
        el.style.opacity = +el.style.opacity - 0.1;

        if (el.style.opacity > 0.2) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        } else {
            el.style.opacity = 0;
            el.style.display = 'none';
        }
    };

    tick();
}

function slideIn(el) {
    el.style.display = 'block';
    var i = 1;
    var tick = function () {
        i += 5;
        el.style.height = i + '%';

        if (i < 100) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };

    tick();
}

function slideOut(el) {
    // el.style.width = '100%';
    var i = 100;
    var tick = function () {
        i -= 5;
        el.style.height = i + '%';

        if (i > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        } else {
            el.style.display = 'none';
        }
    };

    tick();
}

function generateComponentHTML(component, category) {
    var html = "";
    var msg;
    console.log("CAT:", category);
    if (!category) category = "";
    else category = "";
    console.log("COMPONENT: ", component);
    if (typeof component === "object") {
        if (component.message_type == "GENERIC_COMPONENT") {
            if (component.elements.length > 1) { // Birden fazla kart var!
                var elements = component.elements;
                html += '<div class="cbot-carousel-wrapper"><div class="cbot-arrow left"></div>' +
                    '<div class="cbot-arrow right"></div>' +
                    '<div class="cbot-card-carousel" style="width:' + (elements.length * 255) + 'px; position: relative;">';
                for (var i = 0; i < elements.length; i++) {
                    // if (elements[i].title == "") elements[i].title = answerisnotdefined_message || "Answer is not defined";
                    msg = elements[i].title;
                    html += '<div class="cbot-component generic-template" style="float:left; max-width:250px; margin-right:5px;">';
                    if (elements[i].image_url)
                        html += '<div class="cbot-image"><img src="' + elements[i].image_url + '"></div>';

                    if (elements[i].subtitle) {
                        elements[i].subtitle = numberToString((elements[i] || {}).subtitle);
                        sendUrlsToGA(elements[i].subtitle);
                    }

                    html += '<div class="cbot-description">' +
                        '<p class="cbot-title">' + category + msg + '</p>' +
                        '<p class="cbot-subtitle">' + (elements[i].subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
                    html += generateButtonsHTML(elements[i].buttons);
                    html += "</div>";
                }

                html += '</div></div>';

            } else { // Sadece bir tane kart var!
                var element = component.elements[0];
                html += '<div class="cbot-component generic-template">';

                if (element.image_url)
                    html += '<div class="cbot-image"><img src="' + element.image_url + '"></div>';
                // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";
                msg = element.title;

                if (element.subtitle) {
                    element.subtitle = numberToString((element || {}).subtitle);
                    sendUrlsToGA(element.subtitle);
                }

                html += '<div class="cbot-description">' +
                    '<p class="cbot-title">' + category + msg + '</p>' +
                    '<p class="cbot-subtitle">' + (element.subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
                html += generateButtonsHTML(element.buttons);
                html += "</div>";
            }
        } else if (component.message_type == "LIVE_CHAT") {
            if (component.elements.length > 1) { // Birden fazla kart var!
                var elements = component.elements;
                html += '<div class="cbot-arrow left"></div>' +
                    '<div class="cbot-arrow right"></div>' +
                    '<div class="cbot-card-carousel" style="width:' + (elements.length * 255) + 'px; position: relative;">';
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].title == "") elements[i].title = answerisnotdefined_message || "Answer is not defined";
                    msg = elements[i].title;
                    html += '<div class="cbot-component generic-template" style="float:left; max-width:250px; margin-right:5px;">';
                    if (elements[i].image_url)
                        html += '<div class="cbot-image"><img src="' + elements[i].image_url + '"></div>';

                    if (elements[i].subtitle) {
                        elements[i].subtitle = numberToString((elements[i] || {}).subtitle);
                        sendUrlsToGA(elements[i].subtitle);
                    }

                    html += '<div class="cbot-description">' +
                        '<p class="cbot-title">' + category + msg + '</p>' +
                        '<p class="cbot-subtitle">' + (elements[i].subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
                    html += generateButtonsHTML(elements[i].buttons);
                    html += "</div>";
                }

                html += '</div>';

            } else { // Sadece bir tane kart var!
                var element = component.elements[0];
                html += '<div class="cbot-component generic-template">';

                if (element.image_url)
                    html += '<div class="cbot-image"><img src="' + element.image_url + '"></div>';
                // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";
                msg = element.title;

                if (element.subtitle) {
                    element.subtitle = numberToString((element || {}).subtitle);
                    sendUrlsToGA(element.subtitle);
                }

                html += '<div class="cbot-description">' +
                    '<p class="cbot-title">' + category + msg + '</p>' +
                    '<p class="cbot-subtitle">' + (element.subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
                html += generateButtonsHTML(element.buttons);
                html += "</div>";
            }
        } else if (component.message_type == "IMAGE_COMPONENT") {

            var element = component.elements[0];
            html += '<div class="cbot-component generic-template">';

            if (element.url)
                html += '<div class="cbot-tooltip" style="opacity: 1; z-index: 1;"><div onclick="cbotModalImage(\'' + (element.url || "") + '\')"><div class="cbot-image" style="margin-bottom: 0px !important;"><img src="' + element.url + '"><span class="cbot-tooltiptext">' + (botlanguage == "en" ? "Zoom in" : "Büyüt") + '</span></div></div>';
            html += generateButtonsHTML(element.buttons);
            html += "</div>";

        } else if (component.message_type == "VIDEO_COMPONENT") {
            var element = component.elements[0];
            html += '<div class="cbot-component generic-template">';

            if (element.url)
                html += '<div class="cbot-image" style="margin-bottom: 0px !important; max-height:200px"><iframe width="200" height="200" src="' + element.url + '" frameborder="0"></iframe></div>';
            html += generateButtonsHTML(element.buttons);
            html += "</div>";

        } else if (component.message_type == "PREVIEW_COMPONENT") {
            var element = component.elements[0];
            return category + (element.message || "").replace(/(\n|\\n)/g, "<br/>");

        } else if (component.message_type == "LIST_COMPONENT") {
            var elements = component.elements;
            html += '<div class="cbot-component list-template">';
            for (var i = 0; i < elements.length; i++) {
                if (i == 0)
                    html += '<div class="cbot-list-item" style="border-top:none; margin-top:-10px;">';
                else
                    html += '<div class="cbot-list-item">';

                if (elements[i].image_url) {
                    html += '<div class="cbot-list-item-image"><img src="' + elements[i].image_url + '"></div>';
                    html += '<div class="cbot-list-item-description">';
                } else {
                    html += '<div class="cbot-list-item-description" style="width:100%;">';
                }
                // if (elements[i].title == "") elements[i].title = answerisnotdefined_message || "Answer is not defined";
                msg = elements[i].title;

                if (elements[i].subtitle) {
                    elements[i].subtitle = numberToString((elements[i] || {}).subtitle)
                    sendUrlsToGA(elements[i].subtitle);
                }

                html += '<p class="cbot-list-item-title">' + category + msg + '</p>' +
                    '<p class="cbot-list-item-text">' + (elements[i].subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p>';
                var buttons = elements[i].buttons;
                for (var j = 0; buttons && j < buttons.length; j++) {
                    if (buttons[j].type == "web_url") {
                        html += '<a href="' + buttons[j].url + '" target="_blank" class="cbot-list-item-button" onclick="clickTheURLs(this); clickButton(\'' + buttons[j].type + '\',this,\'' + buttons[j].title + '\')"' + '>' + buttons[j].title + '</a>';
                    } else if (buttons[j].type == "phone_number") {
                        html += '<a href="tel:' + buttons[j].payload + '" target="_blank" class="cbot-list-item-button" onclick="clickTheURLs(this); clickButton(\'' + buttons[j].type + '\',this,\'' + buttons[j].title + '\')"' + '>' + buttons[j].title + '</a>';
                    } else if (buttons[j].type == "account_link") {
                        html += '<div class="cbot-button cbot-list-item-button" onclick="popupwindow(\'' + (buttons[j].web_url || buttons[j].url || "") + '\', \'\', 800, 600)">Giriş için Tıklayın</div>';
                    } else {
                        html += '<div class="cbot-button cbot-list-item-button postback" data-payload="' + (buttons[j].payload ? buttons[j].payload : buttons[j].title) + '">' + buttons[j].title + '</div>';
                    }
                }
                html += '</div><div style="clear:both;"></div></div>';
                // html += generateButtonsHTML(elements[i].buttons);
            }

            html += '</div>';
        } else if (component.message_type == "BUTTON_COMPONENT") {

            sendUrlsToGA(component.message);

            html += '<div class="cbot-component generic-template"><div class="cbot-description"><p class="cbot-subtitle">' + category + component.message + '</p></div>';
            html += generateButtonsHTML(component.buttons);
        } else if (component.message_type == "TEXT") {
            return category + (component.message || "").replace(/(\n|\\n)/g, "<br/>");
        } else if (component.message_type == "LOCATION_COMPONENT") {
            html += '<div class="cbot-component generic-template"><a href="https://www.google.com.tr/maps/place/' + component.lat + ',' + component.lng + '" target="_blank">';

            html += '<div class="cbot-image"><img style="cursor: pointer;" src="' + rootAddress + '/img/location.png"></div>';
            // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";

            if (component.address) {
                component.address = numberToString((component || {}).address);
                sendUrlsToGA(component.address);
            }

            html += '<div class="cbot-description">' +
                '<p class="cbot-title">' + category + "" + component.name + '</p>' +
                '<p class="cbot-subtitle">' + component.address.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
            // html += generateButtonsHTML(element.buttons);
            html += "</a></div>";
        } else if (component.message && component.message.quick_replies) {
            msg = component.message.text;
            html += '<div class="cbot-component generic-template"><div class="cbot-description"><p class="cbot-subtitle">' + category + msg + '</p></div>';
            html += generateButtonsHTML(component.message.quick_replies);
        } else if (component.message.attachment.type === "template") { // Mesaj tipi template ise
            msg = component.message.attachment.payload.text;
            if (component.message.attachment.payload.template_type === "button") {

                sendUrlsToGA(msg);

                html += '<div class="cbot-component generic-template"><div class="cbot-description"><p class="cbot-subtitle">' + category + msg + '</p></div>';
                html += generateButtonsHTML(component.message.attachment.payload.buttons);
            } else if (component.message.attachment.payload.template_type === "generic") {
                if (component.message.attachment.payload.elements.length > 1) { // Birden fazla kart var!
                    var elements = component.message.attachment.payload.elements;
                    html += '<div class="cbot-arrow left"></div>' +
                        '<div class="cbot-arrow right"></div>' +
                        '<div class="cbot-card-carousel" style="width:' + (elements.length * 255) + 'px; position: relative;">';
                    for (var i = 0; i < elements.length; i++) {
                        // if (elements[i].title == "") elements[i].title = answerisnotdefined_message || "Answer is not defined";
                        msg = elements[i].title;
                        html += '<div class="cbot-component generic-template" style="float:left; max-width:250px; margin-right:5px;">';
                        if (elements[i].image_url)
                            html += '<div class="cbot-image"><img src="' + elements[i].image_url + '"></div>';

                        if (elements[i].subtitle) {
                            elements[i].subtitle = numberToString((elements[i] || {}).subtitle)
                            sendUrlsToGA(elements[i].subtitle);
                        }

                        html += '<div class="cbot-description">' +
                            '<p class="cbot-title">' + msg + '</p>' +
                            '<p class="cbot-subtitle">' + (elements[i].subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
                        html += generateButtonsHTML(elements[i].buttons);
                        html += "</div>";
                    }

                    html += '</div>';

                } else { // Sadece bir tane kart var!
                    var element = component.message.attachment.payload.elements[0];
                    html += '<div class="cbot-component generic-template">';

                    if (element.image_url)
                        html += '<div class="cbot-image"><img src="' + element.image_url + '"></div>';
                    // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";
                    msg = element.title;

                    if (element.subtitle) {

                        element.subtitle = numberToString((element || {}).subtitle)
                        sendUrlsToGA(element.subtitle);
                    }

                    html += '<div class="cbot-description">' +
                        '<p class="cbot-title">' + category + msg + '</p>' +
                        '<p class="cbot-subtitle">' + (element.subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
                    html += generateButtonsHTML(element.buttons);
                    html += "</div>";
                }
            } else if (component.message.attachment.payload.template_type === "list") {
                var elements = component.message.attachment.payload.elements;
                html += '<div class="cbot-component list-template">';
                for (var i = 0; i < elements.length; i++) {
                    if (i == 0)
                        html += '<div class="cbot-list-item" style="border-top:none; margin-top:-10px;">';
                    else
                        html += '<div class="cbot-list-item">';

                    if (elements[i].image_url) {
                        html += '<div class="cbot-list-item-image"><img src="' + elements[i].image_url + '"></div>';
                        html += '<div class="cbot-list-item-description">';
                    } else {
                        html += '<div class="cbot-list-item-description" style="width:100%;">';
                    }
                    // if (elements[i].title == "") elements[i].title = answerisnotdefined_message || "Answer is not defined";
                    msg = elements[i].title;

                    if (elements[i].subtitle) {
                        elements[i].subtitle = numberToString((elements[i] || {}).subtitle)
                        sendUrlsToGA(elements[i].subtitle);
                    }

                    html += '<p class="cbot-list-item-title">' + category + msg + '</p>' +
                        '<p class="cbot-list-item-text">' + (elements[i].subtitle || "").replace(/(\n|\\n)/g, "<br/>") + '</p>';
                    var buttons = elements[i].buttons;
                    for (var j = 0; buttons && j < buttons.length; j++) {
                        if (buttons[j].type == "web_url") {
                            html += '<a href="' + buttons[j].url + '" target="_blank" class="cbot-list-item-button" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
                        } else if (buttons[j].type == "phone_number") {
                            html += '<a href="tel:' + buttons[j].payload + '" target="_blank" class="cbot-list-item-button" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
                        } else if (buttons[j].type == "account_link") {
                            html += '<div class="cbot-button cbot-list-item-button" onclick="popupwindow(\'' + (buttons[j].web_url || buttons[j].url || "") + '\', \'\', 800, 600)">Giriş için Tıklayın</div>';
                        } else {
                            html += '<div class="cbot-button cbot-list-item-button postback" data-payload="' + (buttons[j].payload ? buttons[j].payload : buttons[j].title) + '">' + buttons[j].title + '</div>';
                        }
                    }
                    html += '</div><div style="clear:both;"></div></div>';
                    // html += generateButtonsHTML(elements[i].buttons);
                }

                html += '</div>';
            }
        } else {
            // TODO: Diğer yapılar buraya!
        }
        return html;
    }

    sendUrlsToGA(component);

    return (component || "").replace(/(\n|\\n)/g, "<br/>");
}

function appendTypingIconToDialogBox(value) {
    // var e = document.getElementById("cbot-chat");
    // e.innerHTML += '<li class="cbot-other cbot-typing"><div class="cbot-msg"><div class="cbot-typing-loader"></div></div></li>', e.scrollTop = 5e6
    if (value != "" && value != undefined) {
        $("#cbot-chat").append('<li class="cbot-other cbot-typing"><div class="cbot-msg">' + value + ' is typing <div class="cbot-typing-loader"></div></div></li>');
    }
    else {
        $("#cbot-chat").append('<li class="cbot-other cbot-typing"><div class="cbot-msg"><div class="cbot-typing-loader"></div></div></li>');
    }

    // console.log("SCROLL 8");
    // $("#cbot-chat").animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1000);
}

function generateButtonsHTML(buttons) {
    var html = '<div class="cbot-description">';
    for (var i = 0; buttons && i < buttons.length; i++) {
        if (buttons[i].type == "web_url") {
            gtag('event', 'cbot', {
                'event_category': 'cbot-button',
                'event_action': buttons[i].title,
                'event_label': buttons[i].url
            })
            html += '<a href="' + buttons[i].url + '" target="_blank" onclick="clickTheURLs(this); clickButton(\'' + buttons[i].type + '\',this,\'' + buttons[i].title + '\')"' + '><div class="cbot-button">' + buttons[i].title + '</div></a>';
        } else if (buttons[i].type == "phone_number") {
            if (buttons[i].payload) buttons[i].payload = buttons[i].payload.replace(/\s+/g, "");

            gtag('event', 'cbot', {
                'event_category': 'cbot-button',
                'event_action': buttons[i].title,
                'event_label': buttons[i].payload
            })
            html += '<a href="tel:' + buttons[i].payload + '" onclick="clickTheURLs(this); clickButton(\'' + buttons[i].type + '\',this,\'' + buttons[i].title + '\')"' + '><div class="cbot-button">' + buttons[i].title + '</div></a>';
        } else if (buttons[i].type == "account_link") {
            html += '<div class="cbot-button cbot-list-item-button" onclick="popupwindow(\'' + (buttons[i].web_url || buttons[i].url || "") + '\', \'\', 800, 600)">Giriş için Tıklayın</div>';
        } else { // postback
            //console.log('<button class="cbot-button postback" data-payload="' + (buttons[i].payload ? buttons[i].payload : buttons[i].title) + '">' + buttons[i].title + '</button>');
            gtag('event', 'cbot', {
                'event_category': 'cbot-button',
                'event_action': buttons[i].title,
                'event_label': 'postback'
            })

            html += '<button class="cbot-button postback" data-payload="' + (buttons[i].payload ? buttons[i].payload : buttons[i].title) + '">' + buttons[i].title + '</button>';
        }
    }
    return html + "</div>";
}

/**
 * ALL OF THE SOCKET PROCESSES.
 */
var age = null;
// var live_handover = false;

function soc_survey() {
    /* socket.on('cbot_survey', function (data) {
        if (data.client_id == userId) {
            //console.log("anket23",data.survey[0]);
            if (data.IsSurvey && data.IsSurvey == true) {
                surveyTrigger(data.survey[0], userId);
                if (data.survey[0].agent_id) {
                    age = data.survey[0].agent_id;
                }
            }
            else {
                appendMessageToDialogBox(data.survey_message, "cbot-other", "", function () { });
            }
            isLive = false;

        }
    }); */
}

function socket_connection_widget() {

    /* socket.on("user_" + userId, function (data) {
        console.log("user_" + userId, data);
        appendMessageToDialogBox(data.message, "cbot-other", data.category);
    }); */
}

function soc_cli_data() {
    /* socket.on('cbot_agent', function (data) {
        console.log("cbot_agent", data);
        if (data.client_id == userId) {
            if (data.handover) {
                appendMessageToDialogBox(data.handover_message, "cbot-other", "", function () {
                });
                isLive = false;
                // live_handover = true;
                sendPost({
                    senderName: "User_" + userId,
                    userId: userId,
                    sessionId: sessionId,
                    message: data.message,
                    intents: intents,
                    client: config.client,
                    live_chat: isLive,
                    mobileLogin: mobileLogin
                }, function (resp) {
                    appendMessageToDialogBox(resp.message, "cbot-other", "", function () {
                        setClickEventToInteractiveButtons(resp.client_id);
                    });
                    // socket.emit("hand_stop", { handover_message: true });
                });

            } else {
                appendMessageToDialogBox(data.message, "cbot-other", "", function () {
                    setClickEventToInteractiveButtons(data.client_id);
                });
            }

        }
    }); */
}
function socket_widget(resp, message) {
    /* if (isLive) {
        let sckt = {
            message: message,
            // answer: resp.message, 
            client_id: resp.userId,
            session_id: resp.session_id,
            referrer: resp.referrer,
            client: CLIENT
        };
        socket.emit("chat_widget", sckt);
    } */

}

function soc_stop() {
    /* socket.on("cbot_stop_ack", function (data) {
        if (data.status && data.client_id == userId) {
            isLive = false;
        }
    }); */
}

function socket_suggestion(message, category, userId) {
    /* if (isLive) {
        let sckt = { message: message, client_id: userId };
        socket.emit("chat_suggestion", sckt);
    } */

}

function soc_typing(status) {
    // socket.emit('chat_typing', { client_id: userId, status: status, type: "CLIENT" });
}
function soc_client_typing() {
    /* socket.on('cbot_typing', function (data) {
        if (data.type == "AGENT" && data.client_id == userId) {
            if (data.status) {
                $(".cbot-typing").remove();
                appendTypingIconToDialogBox(data.agent);
            } else {
                $(".cbot-typing").remove();
            }
        }
    }) */
}
