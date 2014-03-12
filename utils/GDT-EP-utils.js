/*Custom Objects used from DzjengisKhan's GDT Expansion Pack*/
var ExpPack = {};
(function () {	
	/* Custom prices for games */
	ExpPack.addCustomPrice = function () {
		var company = GameManager.company;
		var gamePrice;
		var newPrice;
		var dataStore = GDT.getDataStore("ExpPackMod");
		
		UI.selectPriceClick = function (a) {
		Sound.click();
			switch (a.id) {
				case "applyPrice":
				applyPrice();
					break;
				default:
					return;
			}
		};
		
		var div = $("body");
		div.append('<div id="PriceContainer" class="windowBorder tallWindow" style="overflow:auto;display:none;"> <div id="priceSelector" class="windowTitle smallerWindowTitle">Custom Price</div>');
		div = $("#PriceContainer");
	
		div.append('<div id="exppack_price" style="text-align:center;margin-left:50px;width: 450px"></div>');
		div.append('<div id="exppack_current_price" style="text-align:center;margin-left:50px;width: 450px"></div>');
		div.append('<div id="exppack_select_price" style="text-align:center;margin-left:50px;width: 450px"></div>');
		div.append('<div class="priceSlider"></div>');
		div.append('<div id="applyPrice" class="selectorButton whiteButton" onclick="UI.selectPriceClick(this)" style="margin-left:50px;width: 450px">Set Price</div>');
		
		function applyPrice() {
			if(GameManager.company.isCurrentlyDevelopingGame())
			{
				game = GameManager.company.currentGame;
				
				if (game.gameSize === "medium") {
					Sales.mediumUnitPrice = newPrice;
				}
				else if (game.gameSize === "large") {
					Sales.largeUnitPrice = newPrice;
				}
				else if (game.gameSize === "aaa") {
					Sales.aaaUnitPrice = newPrice;
				}
				else {
					Sales.smallUnitPrice = newPrice;
				}
				
				gamePrice = newPrice;
				div.find("#exppack_current_price").html("Current price: " + gamePrice);
			}
			dataStore.data.gamePrice = gamePrice;
		};
		
		function setPrice(e) {
			if(GameManager.company.isCurrentlyDevelopingGame())
			{
				var game = GameManager.company.currentGame;
				newPrice = e;
				
				var div = $("#PriceContainer");
				
				if(newPrice == 7 && game.gameSize === "small")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else if(newPrice == 11 && game.gameSize === "medium")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else if(newPrice == 14 && game.gameSize === "large")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else if(newPrice == 18 && game.gameSize === "aaa")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else
					div.find("#exppack_price").html(newPrice + " Cr.");
			}
		};
		
		/* calculateSales algorithm */
		var salesCalculated = function (company, game) {
			var price = dataStore.data.gamePrice;
			var currentGame = company.game;
			if (price < 1) {
				if(currentGame.gameSize == "small")
					price =  Sales.smallUnitPrice;
				else if(currentGame.gameSize == "medium")
					price =  Sales.mediumUnitPrice;
				else if(currentGame.gameSize == "large")
					price =  Sales.largeUnitPrice;
				else if(currentGame.gameSize == "aaa")
					price =  Sales.aaaUnitPrice;
			}
			var priceRatio = function (price, game) {
				var a;
				if(game.gameSize === "small")
					a = 2 - (price / 10);
				else if(game.gameSize === "medium")
					a = 2 - (price / 20);
				else if(game.gameSize === "large")
					a = 2 - (price / 40);
				else if(game.gameSize === "aaa")
					a = 2 - (price / 60);
				return a;
			};
			var score = game.score.clamp(1, 10);
			var scoreRatio = function (score) {
				var b;
	
				if(score >= 9)
					b = 1.3;
				else if (score >= 7)
					b = 1.1;
				else if (score >= 5)
					b = 0.8;
				else if (score >= 3)
					b = 0.5;
				else
					b = 0.1;
	
				return b;
			};
			game.totalSalesCash *= 1 * priceRatio(price, game) * scoreRatio(score);
		};
		GDT.fire(GDT.eventKeys.gameplay.salesCalculated, salesCalculated);
		/*  */
		
		var original_showContextMenu = UI._showContextMenu;
		var new_showContextMenu = function (b, c, d, h) {
			GameManager.company.isCurrentlyDevelopingGame() && c.push({
					label: "Game Price...",
					action: function () {
						Sound.click();
						GameManager.resume(true);
						
						var div = $("#PriceContainer");
							 
						div.scrollTop();
							 
						div.gdDialog({
							popout: !0,
							close: !0
						});
					}
			});
				
			var game = GameManager.company.currentGame;
			var max_price;
			
			if (GameManager.company.isCurrentlyDevelopingGame() && game.gameSize === "medium") {
				max_price = 20;
				gamePrice = Sales.mediumUnitPrice;
			}
			else if (GameManager.company.isCurrentlyDevelopingGame() && game.gameSize === "large") {
				max_price = 40;
				gamePrice = Sales.largeUnitPrice;
			}
			else if (GameManager.company.isCurrentlyDevelopingGame() && game.gameSize === "aaa") {
				max_price = 60;
				gamePrice = Sales.aaaUnitPrice;
			}
			else if (GameManager.company.isCurrentlyDevelopingGame()) {
				max_price = 10;
				gamePrice = Sales.smallUnitPrice;
			}
			
			div.find(".priceSlider").slider({
				min: 1,
				max: max_price,
				range: "min",
				value: Math.floor(gamePrice),
				animate: !1,
				slide: function (a, b) {
					var c = b.value;
					setPrice(c);
				}
			});
			setPrice(gamePrice);
		
			original_showContextMenu(b, c, d, h);
		};
		UI._showContextMenu = new_showContextMenu;
	};
	/*  */
	
	/* Black Bull */
	ExpPack.addBlackBull = function () {
		var menuItems = [];
		var div = $("body");
		div = $("#BlackBull");
		
		var original_PopupMenu = UI._showContextMenu;
		var new_initPopupMenu = function (type, menuItems, x, y) {
			var company = GameManager.company;
			var targetChar = company.currentLevel > 1 ? UI.getCharUnderCursor() : company.staff[0];
			
			if(targetChar) {
				if (targetChar.state != CharacterState.Researching &&
					(targetChar.state != CharacterState.Training && targetChar.state != CharacterState.Vacation)) {
					if(company.currentLevel > 1 && targetChar.flags.needsVacation)
					{
						menuItems.push({
							label : "Buy a Black Bull".localize("menu item"),
							action : function () {
								Sound.click();
								GameManager.resume(true);
								var div = $("#BlackBull");
								company.adjustCash(-500, "Black Bull");
								
								targetChar.relaxDelta = 0;
								var vacationInterval;
								var canRecharge;
								var timeLastUsed = GameManager.gameTime * GameManager.SECONDS_PER_WEEK * 1E3;
								if (timeLastUsed < timeLastUsed + 8)
									vacationInterval = 2;
								if (timeLastUsed >= timeLastUsed + 8)
									vacationInterval = 4;
								targetChar.flags.nextVacation = GameManager.gameTime + vacationInterval * GameManager.SECONDS_PER_WEEK * 1E3;
								targetChar.flags.relaxGained = 0;
								targetChar.flags.needsVacation = false;
								canRecharge = true;
								
							}
						});
					}
				}
			}
			original_PopupMenu(type, menuItems, x, y);
		};
		
		UI._showContextMenu = new_initPopupMenu;
	};
	/*  */
	
	
	/*
	 * Custom Price Bug Fix ~Everard
	 */
	ExpPack.checkCustomPrice = function() {
		GDT.off(GDT.eventKeys.gameplay.beforeReleaseGame, ExpPack.checkCustomPrice);
		if (GDT.getDataStore("ExpPackMod").data.gamePrice >= 1){
			return;
		}else{
			GDT.getDataStore("ExpPackMod").data.gamePrice = 7;
		}
	};GDT.on(GDT.eventKeys.gameplay.beforeReleaseGame, ExpPack.checkCustomPrice);
	
	
})();
