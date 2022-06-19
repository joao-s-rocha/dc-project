export const state = () => ({
    id: 70,
    name: "Batman",
    slug: "70-batman",
    powerstats: {
        intelligence: 100,
        strength: 26,
        speed: 27,
        durability: 50,
        power: 47,
        combat: 100
    },
    appearance: {
        gender: "Male",
        race: "Human",
        height: "188 cm",
        weight: "95 kg",
    },
    biography: {
        fullName: "Bruce Wayne",
        alterEgos: "No alter egos found.",
        alignment: "good",
        publisher: "DC Comics",
    },
    img : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg"
})

export const mutations = {
    add(state, payload) {
        console.log(payload);
        state.id = payload.id;
        state.name = payload.name;
        state.slug = payload.slug;
        state.powerstats.intelligence = payload.powerstats.intelligence;
        state.powerstats.strength = payload.powerstats.strength;
        state.powerstats.speed = payload.powerstats.speed;
        state.powerstats.durability = payload.powerstats.durability;
        state.powerstats.power = payload.powerstats.power;
        state.powerstats.combat = payload.powerstats.combat;
        state.appearance.gender = payload.appearance.gender;
        state.appearance.race = payload.appearance.race;
        state.appearance.height = payload.appearance.height[1];
        state.appearance.weight = payload.appearance.weight[1];
        state.biography.fullName = payload.biography.fullName.substring(0,16);
        state.biography.alterEgos = payload.biography.alterEgos.substring(0,16);
        state.biography.alignment = payload.biography.alignment;
        state.biography.publisher = payload.biography.publisher;

        state.img = payload.images.sm;
    }
}

export const actions = {
    async getHero (context, payload) {
        const hero = await this.$axios.$get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/'+payload+'.json');
        context.commit('add', hero);
    }
}