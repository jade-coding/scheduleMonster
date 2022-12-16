import { Router } from 'express';
import { itemController } from '../controller';
import { asyncHandler } from '../utils';

export const itemRouter = Router();

// 아이템 전체정보 확인
itemRouter.get('/all', asyncHandler(itemController.getItems));
// 아이템 상세정보 확인
itemRouter.get('/detail', asyncHandler(itemController.getItem));
// 아이템 카테고리별 정보
// itemRouter.get('/category', asyncHandler(itemController.getCategoryItem));
// 아이템 등록
itemRouter.post('/register', asyncHandler(itemController.createItem));
// 아이템 수정
itemRouter.put('/update', asyncHandler(itemController.updateItem));
// 아이템 삭제
itemRouter.delete('/delete/:id', asyncHandler(itemController.deleteItem));