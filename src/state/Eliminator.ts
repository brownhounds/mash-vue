import type { ModelItem } from './ModelItem';
import type { CategoriesType } from './categories';

export class Eliminator {
    public isRunning = false;
    public eliminatorFactor = 0;

    private previousItem?: ModelItem;
    private tickCount = 1;

    constructor(private model: Map<CategoriesType, ModelItem[]>) {}

    public async run(): Promise<void> {
        this.isRunning = true;

        for (const items of this.model.values()) {
            const activeItems = items.filter((item) => !item.eliminated);

            if (activeItems.length !== 1) {
                for (const item of activeItems) {
                    this.deselectPreviousItem();
                    item.current = true;
                    await this.delay(150);
                    this.eliminateItem(item);
                    this.tickCount++;
                    this.previousItem = item;
                }
                this.deselectPreviousItem();
            }
        }

        if (this.shouldContinue()) {
            return await this.run();
        }

        this.isRunning = false;
    }

    private deselectPreviousItem(): void {
        if (this.previousItem) {
            this.previousItem.current = false;
        }
    }

    private eliminateItem(item: ModelItem): void {
        if (this.tickCount % this.eliminatorFactor === 0) {
            item.eliminated = true;
        }
    }

    private shouldContinue(): boolean {
        for (const items of this.model.values()) {
            const activeItems = items.filter((item) => !item.eliminated);
            if (activeItems.length !== 1) {
                return true;
            }
        }
        return false;
    }

    private delay(ms: number = 100): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
