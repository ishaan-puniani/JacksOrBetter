TEXT_GAMEOVER  = "GAME OVER";
TEXT_PLAY      = "PLAY";
TEXT_BET       = "BET";
TEXT_WIN       = "WIN";
TEXT_MONEY     = "MONEY";
TEXT_DEAL      = "DEAL";
TEXT_BET_ONE   = "BET ONE";
TEXT_MAX_BET   = "BET MAX";
TEXT_RECHARGE  = "RECHARGE";
TEXT_EXIT      = "EXIT";
TEXT_DRAW      = "DRAW";
TEXT_NO_WIN    = "NO WIN";
TEXT_CURRENCY  = "$";
TEXT_COMBO     = {
                            ROYAL_FLUSH:"Royal Flush",
                            STRAIGHT_FLUSH:"Straight Flush",
                            FOUR_OF_A_KIND:"Four of a Kind",
                            FULL_HOUSE:"Full House",
                            FLUSH:"Flush",
                            STRAIGHT:"Straight",
                            THREE_OF_A_KIND:"Three of a Kind",
                            TWO_PAIR:"Two Pairs",
                            JACKS_OR_BETTER:"Jacks or Better"
                            }

TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_SHARE_1 = "You collected <strong>" 
TEXT_SHARE_2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_3 = "My score is ";
TEXT_SHARE_4 = " points! Can you do better?";						

var s_oGame;
 var s_oPayTableSettings;

var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 768;

var EDGEBOARD_X = 400;
var EDGEBOARD_Y = 0;

var FONT1 = "OpenSans-BoldItalic";
var FONT2 = "Digital-7";

var FPS_TIME      = 1000/24;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;

var STATE_GAME_WAITING_FOR_BET  = 0;
var STATE_GAME_DEAL             = 1;
var STATE_GAME_CHOOSE_HOLD      = 2;
var STATE_GAME_DRAW             = 3;
var STATE_GAME_EVALUATE         = 4;

var ON_CARD_SHOWN = "ON_CARD_SHOWN";
var ON_CARD_HIDE = "ON_CARD_HIDE";

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;
/*
var ROYAL_FLUSH     = 0;
var STRAIGHT_FLUSH  = 1;
var FOUR_OF_A_KIND  = 2;
var FULL_HOUSE      = 3;
var FLUSH           = 4;
var STRAIGHT        = 5;
var THREE_OF_A_KIND = 6;
var TWO_PAIR        = 7;
var JACKS_OR_BETTER = 8;
var HIGH_CARD       = 9;

var CARD_TWO = 2;
var CARD_THREE = 3;
var CARD_FOUR = 4;
var CARD_FIVE = 5;
var CARD_SIX = 6;
var CARD_SEVEN = 7;
var CARD_EIGHT = 8;
var CARD_NINE = 9;
var CARD_TEN = 10;
var CARD_JACK = 11;
var CARD_QUEEN = 12;
var CARD_KING = 13;
var CARD_ACE = 14;

var SUIT_HEARTS = 0;
var SUIT_DIAMONDS = 1;
var SUIT_CLUBS = 2;
var SUIT_SPADES = 3;
*/
var CARD_WIDTH = 154;
var CARD_HEIGHT = 240;
var BET_TYPE;
var TOTAL_MONEY;
var NUM_BETS = 5;
var WIN_COMBINATIONS = 9;
var COMBO_PRIZES;
var AUTOMATIC_RECHARGE;
var WIN_OCCURRENCE;
var GAME_CASH;
var MIN_WIN;
var NUM_HAND_FOR_ADS;

var s_iOffsetX;
var s_iOffsetY;


var s_oMenu = null;

var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain = null;
var s_oSpriteLibrary;
var s_oSoundTrack;


var s_oInterface = null;