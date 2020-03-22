import dva from 'dva';

// 1. Initialize
 const app = dva({
     initialState: {
       todolist: [
           { name: 'dva', id: 1 },
           { name: 'antd', id: 2 },
           { name: 'antd1123', id: 23 },
         ],
       },
 });

app.model(require('./models/todolist').default);
app.router(require('./router').default);

// 5. Start
app.start('#root');


