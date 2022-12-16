import Router from 'express';

const indexRouter = Router();
/* GET home page. */
indexRouter.post('/', function (req, res) {
  res.json({ title: '12Team project1' });
});

export { indexRouter };
export * from './userRouter';
export * from './itemRouter';
