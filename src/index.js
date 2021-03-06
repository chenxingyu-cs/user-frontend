import dva from 'dva';
import './index.css';
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example'));

app.model(require("./models/wechatInfo"));

app.model(require("./models/wxconfig"));

app.model(require("./models/orders"));

app.model(require("./models/user"));

app.model(require('./models/machineDetail'));

app.model(require('./models/laundryStation'));

app.model(require('./models/laundries'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
