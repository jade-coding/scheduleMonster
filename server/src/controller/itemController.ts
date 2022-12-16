import { itemService } from '../services';
import { AsyncRequestHandler } from '../types';

interface itemControllerInterface {
    getItems: AsyncRequestHandler;
    getItem: AsyncRequestHandler;
    // getCategoryItem: AsyncRequestHandler;
    createItem: AsyncRequestHandler;
    updateItem: AsyncRequestHandler;
    deleteItem: AsyncRequestHandler;
}

export const itemController: itemControllerInterface = {
    async getItems(req, res) {
        const items = await itemService.getItems();
        res.json(items);
    },
    async getItem(req, res) {
        const { _id } = req.body;
        const item = await itemService.getItem(_id);
        res.json(item);
    },
    // async getCategoryItem(req, res) {
    //     const { category } = req.body;
    //     const item = await itemService.getCategoryItem(category);
    //     res.json(item);
    // },
    async createItem(req, res) {
        const response = await itemService.createItem(req.body);
        res.json(response);
    },
    async updateItem(req, res) {
        const response = await itemService.updateItem(req.body);
        res.json(response);
    },
    async deleteItem(req, res) {
        const { id } = req.params;
        const response = await itemService.deleteItem(id);
        res.json(response);
    },
};
