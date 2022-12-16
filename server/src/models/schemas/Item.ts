import { Schema, model, Model } from 'mongoose';

// 인터페이스
export interface ItemInterface {
    itemName: String;
    price: Number;
    exp: Number;
    category: String;
}
export interface UpdateItemInterface {
    _id: String;
    itemName?: String;
    price?: Number;
    exp?: Number;
    category?: String;
}

// 스키마
export const itemSchema = new Schema<ItemInterface>(
    {
        itemName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        exp: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: 'item',
    },
);

// 모델
export interface itemModelType extends Model<ItemInterface> {}
export const itemModel = model<ItemInterface, itemModelType>('Item', itemSchema);
