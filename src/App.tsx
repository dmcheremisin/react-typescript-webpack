import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  // const num = 0; eslint error - unused variable

  return (
    <>
      <h1>React Typescript Webpack Starter Template</h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" height="200" />
      <p>Environment: {process.env.NODE_ENV}</p>
      <p>Env variable: {process.env.name}</p>
      <ClickCounter />
    </>
  )
}
