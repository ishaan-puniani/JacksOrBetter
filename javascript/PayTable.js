function CPayTable(paytable, betLevels, iX, iY) {
    var _iAlphaAnim;
    var _aSelection;
    var _aPrizes;
    var _aComboText;
    var _oContainer;

    this._init = function (iX, iY) {
        _iAlphaAnim = 0;

        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        s_oStage.addChild(_oContainer);

        var oPayTable = createBitmap(s_oSpriteLibrary.getSprite('paytable'));
        _oContainer.addChild(oPayTable);

        var iXOffset = 278;
        var iYOffset = 4;
        _aSelection = new Array();
        for (var s = 0; s < betLevels.length; s++) {
            var oSelection = createBitmap(s_oSpriteLibrary.getSprite('selection'));
            oSelection.visible = false;
            oSelection.x = iXOffset;
            oSelection.y = iYOffset;
            _oContainer.addChild(oSelection);

            _aSelection.push(oSelection);

            iXOffset += 100;
        }

        //COMBO TEXT
        iXOffset = 275;
        iYOffset = 27;
        _aComboText = new Array();
        _aPrizes = {};
        for (var key in paytable) {
            var oComboText = new createjs.Text(TEXT_COMBO[key], "bold 22px Arial", "#fff000");
            oComboText.x = iXOffset;
            oComboText.y = iYOffset;
            oComboText.textAlign = "right";
            oComboText.textBaseline = "middle";
            _oContainer.addChild(oComboText);



            _aComboText[key] = oComboText;

            // show payout
            var payoutXOffset = 375;
            _aPrizes[key] = {};
            for (var idxPayout = 0; idxPayout < paytable[key].length; idxPayout++) {
                var oPrizeText = new createjs.Text(paytable[key][idxPayout], "bold 22px Arial", "#fff000");
                oPrizeText.x = payoutXOffset;
                oPrizeText.y = iYOffset;
                oPrizeText.textAlign = "right";
                oPrizeText.textBaseline = "middle";
                _oContainer.addChild(oPrizeText);
                payoutXOffset += 100;
                _aPrizes[key][idxPayout] = oPrizeText;
            }

            iYOffset += 22;

        }

        //iXOffset = 375;

        //PRIZES TEXT
        /*        _aPrizes = new Array();
         for(var i=0;i<betLevels.length;i++){
         iYOffset = 27;
         _aPrizes[i] = new Array();
         for(var j=0;j<WIN_COMBINATIONS;j++){
         var oPrizeText = new createjs.Text(s_oPayTableSettings.getWin(i,j),"bold 22px Arial", "#fff000");
         oPrizeText.x = iXOffset;
         oPrizeText.y = iYOffset;
         oPrizeText.textAlign = "right";
         oPrizeText.textBaseline = "middle";
         _oContainer.addChild(oPrizeText);
         
         iYOffset += 22;
         _aPrizes[i][j] = oPrizeText;
         }   
         iXOffset += 100;
         }
         */
    };

    this.resetHand = function () {
        //debugger;
        createjs.Tween.removeAllTweens();
        for(var key in _aPrizes){
            var pt = _aPrizes[key];
            for(var winKey in pt){
                pt[winKey].alpha = 1;
            }
        }
        for(var key in _aComboText){
            _aComboText[key].alpha = 1;
        }
        
        /*
        for (var i = 0; i < NUM_BETS; i++) {
            for (var j = 0; j < WIN_COMBINATIONS; j++) {
                _aPrizes[i][j].alpha = 1;
            }
        }
        
        for (var k = 0; k < WIN_COMBINATIONS; k++) {
            _aComboText[k].alpha = 1;
        }
*/
    };

    this.setCreditColumn = function (iCol) {
        //debugger;
        for (var i = 0; i < betLevels.length; i++) {
            _aSelection[i].visible = false;
        }
        _aSelection[iCol].visible = true;
    };

    this.showWinAnim = function (iRow, iCol) {
        var oParent = this;
        createjs.Tween.get(_aPrizes[iRow][iCol]).to({alpha: _iAlphaAnim}, 100).call(function () {
            oParent.showWinAnim(iRow, iCol)
        });
        createjs.Tween.get(_aComboText[iRow]).to({alpha: _iAlphaAnim}, 100);
        if (_iAlphaAnim === 1) {
            _iAlphaAnim = 0;
        } else {
            _iAlphaAnim = 1;
        }
    };
    paytable = paytable;
    betLevels = betLevels;
    this._init(iX, iY);
}
