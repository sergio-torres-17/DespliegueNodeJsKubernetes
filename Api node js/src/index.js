import  express  from  'express';
import flavorRoutes from './routes/flavor.routes.js'
import testDb from './routes/testDb.routes.js'

const app = express()
app.use(express.json())
app.use(testDb)
app.use(flavorRoutes);
app.listen(3000)
console.log('Server running on port 3000')