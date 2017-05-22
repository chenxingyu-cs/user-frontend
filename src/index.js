import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example'));

app.model(require("./models/orders"));

app.model(require("./models/user"));

app.model(require('./models/machineDetail'));

app.model(require('./models/laundryStation'));

app.model(require('./models/laundries'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
