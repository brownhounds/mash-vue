import { markRaw } from 'vue';

import Welcome from '../components/Welcome/Welcome.vue';
import Questions from '../components/Questions/Questions.vue';
import Roll from '../components/Roll/Roll.vue';
import Elimination from '../components/Elimination/Elimination.vue';
import Results from '../components/Results/Results.vue';

import { ModelItem } from './ModelItem';
import {
    Categories,
    CategoriesType,
    categoriesInitialValues,
} from './categories';
import { Eliminator } from './Eliminator';

export class GameState {
    public scenes = [
        markRaw(Welcome),
        markRaw(Questions),
        markRaw(Roll),
        markRaw(Elimination),
        markRaw(Results),
    ];

    public activeScene = 0;

    public get scene() {
        return this.scenes[this.activeScene];
    }

    public model = new Map<CategoriesType, ModelItem[]>();

    public eliminator = new Eliminator(this.model);

    constructor() {
        for (const [_, value] of Object.entries(Categories)) {
            this.model.set(
                value,
                categoriesInitialValues[value].map(
                    (category) => new ModelItem(category)
                )
            );
        }
    }

    public nextScene() {
        if (this.activeScene < this.scenes.length - 1) this.activeScene++;
    }

    public getMashModel(): ModelItem[] {
        return this.model.get(Categories.MASH)!;
    }

    public getResults() {
        return {
            MASH: this.findActiveItem(Categories.MASH),
            LIFE_PARTNER: this.findActiveItem(Categories.LIFE_PARTNER),
            NUMBER_OF_KIDS: this.findActiveItem(Categories.NUMBER_OF_KIDS),
            JOB: this.findActiveItem(Categories.JOB),
            PET: this.findActiveItem(Categories.PET),
            CAR: this.findActiveItem(Categories.CAR),
            LOCATION: this.findActiveItem(Categories.LOCATION),
        };
    }

    public isModelValid(): boolean {
        for (const items of this.model.values()) {
            const invalidItems = items.filter(
                (item) => item.value.replace(/\s/g, '') === ''
            );

            if (invalidItems.length) {
                return false;
            }
        }

        return true;
    }

    private findActiveItem(category: CategoriesType) {
        return this.model.get(category)?.find((item) => !item.eliminated);
    }
}
