var CompManager = {};
var gm = GameManager;
(function (){
        CompManager.comp = {};
        CompManager.CreateCompetitior = function(cname,cid,cicon) {
                if(cname && cid)
                        CompManager.comp[cid].name = cname;
                if(cicon)
                        CompManager.comp[cid].icon = cicon;
        };
        CompManager.GetCompetitiorID = function(id) {
                var Unknown = null;
                if(!CompManager.comp[id].name) return Unknown;
                return CompManager.comp[id].name;
        };
        CompManager.GetCompetitiorN = function(name) {
                var Comp = CompManager.comp;
                var Unknown = null;
                if(Comp.length < 0) return Unknown;
                for(i = 0; i<Comp.length;i++)
                {
                        if(Comp.name == name)
                                return i;
                }
                return Unknown;
        };
        CompManager.CreateRandom() = function() {
                var newComp = CompManager.CompNameGenerator();
                CompManager.CreateCompetitior(newComp.name,CompManager.comp.length,newComp.icon);
        };
})();
var RandCompName = {
        prefixes = ["Crashed","Missing","Fun","Angry","Flying","Blocked","Kicking","Jumping","Punched","Headless","Round","Cluesless"],
        names = ["Watermelon","Shuttle","Pole","Shoes","Tech","Computers","Pumkins","Sword","Hammer","Mirror","Cart","Programs"],
        //The current icons are mostly placeholders for now
        icons = ['./mods/realism-mod/img/Wat.png','./mods/realism-mod/img/Shu.png','./mods/realism-mod/img/Pol.png','./mods/realism-mod/img/Sho.png','./mods/realism-mod/img/Tec.png','./mods/realism-mod/img/Com.png','./mods/realism-mod/img/Pum.png','./mods/realism-mod/img/Swo.png','./mods/realism-mod/img/Ham.png','./mods/realism-mod/img/Mir.png','./mods/realism-mod/img/Car.png','./mods/realism-mod/img/Pro.png']
        suffixess = ["Ltd","Inc","LLC","Corp.","Co.","Association","Syndicate"]
};
RandCompName.addName = function (name){
        RandCompName.names.push(name);
};
RandCompName.addPrefix = function (name) {
        RandCompName.prefixes.push(name);
};
RandCompName.addSuffix = function (name){
        RandCompName.suffixess.push(name);
};
CompManager.CompNameGenerator = function(){
        var numis = null;
        function getItem(array) {
                var num = Math.floor(Math.random()*array.length);
                numis = num;
                return array[num];
        }

        var Comp = {};
        
        if(Math.random() < 0.7) {
            Comp.name += "" + getItem(RandCompName.prefixes);
            Comp.name += " " + getItem(RandCompName.names);
            Comp.icon = RandCompName.icons[numis];
            Comp.name += " " + getItem(RandCompName.suffixess);
        }
        else {
            Comp.name += "" + getItem(RandCompName.names);
            Comp.name += " " + getItem(RandCompName.names);
            Comp.icon = RandCompName.icons[numis];
            Comp.name += " " + getItem(RandCompName.suffixess);
        }
        
        return Comp;
};
CompManager.dataStore = GDT.getDataStore("Realism-Mod");
CompManager.save = function() {
        if(Competitiors.entity.length == 0)
                return;
        
        self.dataStore.data.cEntities = CompManager.comp;
}();
CompManager.startUp = function() {
        GDT.on(GDT.eventKeys.saves.saving, CompManager.save);
        GDT.on(GDT.eventKeys.saves.loading, function(){
                CompManager.comp = self.dataStore.data.cEntities;
        });
}
var cm = CompManager;
cm.createNPCoEngine = function (id,name,tech,parts,costs,relWeek,owner) {
        var engine = {
                id : id,
                name : name,
                parts : parts,
                techLevel : tech,
                costs : costs
                releaseWeek : relWeek
                owner : owner
        };
        gm.company.engines.push(engine);
        for (var i = 0; i < engine.parts.length; i++) {
                var part = engine.parts[i];
                gm.company.engineParts.push(part)
	}
	var icon = "";
	var ownloc;
	for(var i = 0; i < cm.comp.length; i++){
		if(cm.comp[i].name == owner)
		{
			icon = cm.comp[i].icon;
			ownloc = i;
			break;
		}
	}
	var msg = "{0} has just created an engine known as {1}. We could probably create a couple games off of it if we buy the license for it".localize().format(engine.owner,engine.name);
	gm.company.notifications.push(new Notification(
		header: "{0}'s Engine".localize("heading").format(engine.owner),
		text: msg,
		image: icon
	));
	cm.comp[ownloc].engines.push(engine);
};
cm.createOSLEngine = function (id,name,tech,parts,relWeek,owner) {
        var engine = {
                id : id,
                name : name,
                parts : parts,
                techLevel : tech,
                costs : 0,
                releaseWeek : relWeek
                owner : owner,
                needsMention : true
        };
        gm.company.engines.push(engine);
        for (var i = 0; i < engine.parts.length; i++) {
                var part = engine.parts[i];
                gm.company.engineParts.push(part);
	}
	var icon = "";
	for(var i = 0; i < cm.comp.length; i++){
		if(cm.comp[i].name == owner)
		{
			icon = cm.comp[i].icon;
			break;
		}
	}
	var msg = "{0} has just created an open source engine with a license known as {1}. We could probably create a couple games off of it. We could also modify {1} but we need to state that we weren't the orignal creators of it or we could be sued".localize().format(engine.owner,engine.name);
	gm.company.notifications.push(new Notification(
		header:"{0}'s Engine".localize("heading").format(engine.owner),
		text: msg
		image: icon
	));
	cm.comp[ownloc].engines.push(engine);	
};
cm.createOSEngine = function (id,name,tech,parts,relWeek,owner) {
        var engine = {
                id : id,
                name : name,
                parts : parts,
                techLevel : tech,
                costs : 0
                releaseWeek : relWeek
                owner : owner,
                needsMention : false
        };
        gm.company.engines.push(engine);
        for (var i = 0; i < engine.parts.length; i++) {
                var part = engine.parts[i];
                gm.company.engineParts.push(part)
	}
	var icon = "";
	for(var i = 0; i < cm.comp.length; i++){
		if(cm.comp[i].name == owner)
		{
			icon = cm.comp[i].icon;
			break;
		}
	}
	var msg = "{0} has just created an open source engine known as {1}. We could probably create a couple games off of it. We could also modify {1}. We do not have to credit anyone for the engine".localize().format(engine.owner,engine.name);
	gm.company.notifications.push(new Notification(
		header: "{0}'s Engine".localize("heading").format(engine.owner), 
		text: msg,
		image: icon
		));
	cm.comp[ownloc].engines.push(engine);	
};
