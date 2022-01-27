//rendering promt
let d = new Dialog({
 title: "What do you wan to do?",
 content: "<p>Do you wan to turn all the charecter spell into <b>inate spell casting wit 1/1 uses </b>? ",
 buttons: {
  one: {
   icon: '<i class="fas fa-check"></i>',
   label: "Yes",
   callback: () =>  update_spell_list()
  },
  two: {
   icon: '<i class="fas fa-times"></i>',
   label: "No, Revert",
   callback: () => revert_update ()
  }
 },
 default: "one",
 //render: html => console.log("Register interactivity in the rendered dialog"),
 //close: html => console.log("Closing")
});
d.render(true);

// Updating tokens prototype sheet
async function update_spell_list() {
    const macroActor = game.actors.getName(token.actor.name);
    const preUpdates = game.actors.getName(token.actor.name).itemTypes.spell.filter(i => i.data.data.preparation.mode === "prepared").map(i =>  ({
        _id: i.id, 
        data: {
            preparation: {
                mode : i.data.data.preparation.mode
            }, 
            uses: {
                max: i.data.data.uses.max, 
                per: i.data.data.uses.per,
                value: i.data.data.uses.value
            }
        }
    }));
    await macroActor.setFlag("world", "oldSettingSpell", preUpdates);
    const updates = game.actors.getName(token.actor.name).itemTypes.spell.filter(i => i.data.data.preparation.mode === "prepared").map(i => ({
        _id: i.id, 
        "data.preparation.mode" : "innate", 
        "data.uses.max": 1, 
        "data.uses.per": "lr",
        "data.uses.value": 1
    }));
    await macroActor.updateEmbeddedDocuments("Item", updates);

}

async function revert_update (){
    const macroActor = game.actors.getName(token.actor.name);
    const updates = macroActor.getFlag("world", "oldSettingSpell");
    await macroActor.updateEmbeddedDocuments("Item", updates);
    await macroActor.unsetFlag("world", "oldSettingSpell");

}
