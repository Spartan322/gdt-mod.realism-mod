var CheckTech = function() {
        self.rand = 1 + 99*GameManager.company.GetRandom();
        if(self.rand<70)
                return "Low Tech";
        return "High Tech;"
};

var Real = {};
Real.gameplayItems = {};
Real.dialogItems = {};
Real.levelDesignItems = {};
Real.aiItems = {};
Real.worldDesignItems = {};
Real.graphicsItems = {};
Real.soundItems = {};
Real.SpecialItems = {};

Real.setupResearchItems = function() {
        for(var i = 0; i < Real.gameplayItems.length; i++)
                Research.gameplayItems.push(Real.gameplayItems[i]);
        for(var i = 0; i < Real.storyItems.length; i++)
                Research.storyItems.push(Real.storyItems[i]);
        for(var i = 0; i < Real.dialogItems.length; i++)
                Research.dialogItems.push(Real.dialogItems);
        for(var i = 0; i < Real.levelDesignItems.length; i++)
                Research.levelDesignItems.push(Real.levelDesignItems);
        for(var i = 0; i < Real.aiItems.length; i++)
                Research.aiItems.push(Real.aiItems);
        for(var i = 0; i < Real.worldDesignItems.length; i++)
                Research.worldDesignItems.push(Real.worldDesignItems);
        for(var i = 0; i < Real.graphicItems.length; i++)
                Research.graphicItems.push(Real.graphicItems);
        for(var i = 0; i < Real.soundItems.length; i++)
                Research.soundItems.push(Real.soundItems);
        for(var i = 0; i < Real.SpecialItems.length; i++)
                Research.SpecialItems.push(Real.SpecialItems);
};
var R = Real;
R.addGameplayResearch = function(research) {
        R.gameplayItems.push(research);
};
R.addStoryResearch = function(research) {
        R.storyItems.push(research);
};
R.addDialogResearch = function(research) {
        R.dialogItems.push(research);
};
R.addLevelDesignResearch = function(research) {
        R.levelDesignItems.push(research);
};
R.addAIResearch = function(research) {
        R.aiItems.push(research);
};
R.addWorldDesignResearch = function(research) {
        R.worldDesignItems.push(research);
};
R.addGraphicResearch = function(research) {
        R.graphicItems.push(research);
};
R.addSoundResearch = function(research) {
        R.soundItems.push(research);
};
R.addSpecialResearch = function(research) {
        R.SpecialItems.push(research);
};
