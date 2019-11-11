import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Hello = lazy(() => import('./components/Hello'));
const About = lazy(() => import('./components/About'));

export const Routes = {
  home: '/home',
  hello: '/hello',
  about: '/about',
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={Routes.home}>
            <Home />
          </Route>
          <Route path={Routes.hello}>
            <Hello />
          </Route>
          <Route path={Routes.about}>
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
