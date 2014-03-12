(function () {
//this is the default modding API module that is loaded as the first mod and provides convenience methods for other mods.
//generally methods are added to the global object GDT.
        var ready = function () {
                ExpPack.addCustomPrice();
                ExpPack.addBlackBull();
                Competitiors.startUp();
                //example calls
        
                //Examples.addTopic();
                //Examples.addPlatform();
                //Examples.addEvent();
                //Examples.addResearch();
        };

        var error = function () {
        };
        GDT.loadJs([
        'mods/gdt-modAPI/helpers/checks.js',
        'mods/gdt-modAPI/api/persistence.js',
        'mods/gdt-modAPI/api/events.js',
        'mods/gdt-modAPI/api/platforms.js',
        'mods/gdt-modAPI/api/topics.js',
        'mods/gdt-modAPI/api/research.js',
        'mods/gdt-modAPI/examples/examples.js',
        'mods/realism-mod/utils/GDT-UL-utils.js',
        'mods/realism-mod/utils/GDT-EP-utils.js',
        'mods/realism-mod/utils/utils.js'
        'mods/realism-mod/event/eventKeys.js'
        'mods/realism-mod/competition/competitior.js',
        'mods/realism-mod/event/events.js'
        ], ready, error);
})();
