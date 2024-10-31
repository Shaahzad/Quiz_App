import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Score from './Score'




createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>
<Routes>
    <Route path='/' element={<App/>}/>
    <Route path='QuizScore' element={<Score/>}/>
</Routes>
</BrowserRouter>
</>
)
