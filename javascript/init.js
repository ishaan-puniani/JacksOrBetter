function getServerResponse(action, callback, objToPost) {
    var data = {
        "game": GAMEID,
        "action": action
    };
    if (objToPost) {
        for (var key in objToPost) {
            data[key] = objToPost[key];
        }
    }
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://platform-gameolive.rhcloud.com/api/games/play",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
            "content-type": "application/json"

        },
        "data": JSON.stringify(data),
        xhrFields: {withCredentials: true}
    }
    if (sessionStorage.token) {
        settings.headers.Authorization = "Bearer " + sessionStorage.token;
    }

    $.ajax(settings).done(callback);
}





function getParamValue(paramName) {
    var url = window.location.search.substring(1);
    var qArray = url.split('&');
    for (var i = 0; i < qArray.length; i++)
    {
        var pArr = qArray[i].split('=');
        if (pArr[0] == paramName)
            return pArr[1];
    }
}

$(document).ready(function () {
    getServerResponse('init', function (response) {
        var oMain = new CMain({
            //win_occurrence: 40, //WIN OCCURRENCE PERCENTAGE
            //game_cash: response.balance, //MONEY IN GAME CASH. IF THE GAME DOESN'T HAVE ENOUGHT MONEY, THE PLAYER MUST LOSE.
            bets: response.betOptions, //ALL THE AVAILABLE BETS FOR THE PLAYER,
            paytable: response.paytable,
            cards: response.cards,
            nextAction: response.nextAction,
            betLevels: response.betLevels,
            // combo_prizes: [250, 50, 25, 9, 6, 4, 3, 2, 1], //WINS FOR FIRST COLUMN
            money: response.balance, //STARING CREDIT FOR THE USER
            recharge: true, //RECHARGE WHEN MONEY IS ZERO. SET THIS TO FALSE TO AVOID AUTOMATIC RECHARGE
            //num_hand_before_ads: 10                 //NUMBER OF HANDS TO COMPLETE, BEFORE TRIGGERING SAVE_SCORE EVENT. USEFUL FOR INTER-LEVEL AD EVENTUALLY.
        });
    });
    if (isIphone()) {
        setTimeout(function () {
            sizeHandler();
        }, 200);
    } else {
        sizeHandler();
    }
});