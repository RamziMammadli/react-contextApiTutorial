import React, { useEffect } from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './context/context'

const App = () => {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default App

// import React from 'react'
// import Home from './pages/Home'
// import { MainContext} from './context/context'

// const App = () => {

  // const [db, setDb] = useState([])

  // useEffect(() => {
  //   axios.get('url')
  //   .then(res => {
  //     setDb(res.data)
  //   })
  // },[])

  // const data = {
  //   db
  // }

//   return (
//     <MainContext.Provider value={data}>
//       <Home/>
//     </MainContext.Provider>
//   )
// }

// export default App