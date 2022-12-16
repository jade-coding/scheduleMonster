import {
    itemModel,
    itemModelType,
    ItemInterface,
    UpdateItemInterface
} from '../models/schemas/Item';

class ItemService {
    private Item: itemModelType;
    constructor(itemModel: itemModelType) {
        this.Item = itemModel;
    }

    // 아이템 전체 조회
    async getItems() {
        const result = await this.Item.find({});
        return result
    }
    // 아이템 상세 조회
    async getItem(_id: string) {
        const result =  await this.Item.findOne({_id: _id });
        return result
    }

    // 카테고리 별 아이템 조회


    // 아이템 생성
    async createItem(itemInfo: ItemInterface) {
        return await this.Item.create(itemInfo);
    }

    // 아이템 수정
    async updateItem(updateInfo: UpdateItemInterface) {
        const { _id, itemName, price, exp, category } = updateInfo
        const toUpdate = {
            ...(itemName && { itemName }),
            ...(price && { price }),
            ...(exp && { exp }),
            ...(category && { category }),
        }
        const result =  await this.Item.findOneAndUpdate({_id: _id}, toUpdate, { returnOriginal: false },);
        return result
    }

    // 아이템 삭제
    async deleteItem(id: string) {
        const result = await this.Item.remove({ _id: id });
        return result
    }
}
const itemService = new ItemService(itemModel);

export { itemService };