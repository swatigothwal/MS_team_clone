import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "components/Home";
import Login from "components/Login";
import Register from "components/Register";
import Room from "components/Room";
import Join from "components/Join";
import { setToken, getToken } from "api/token";
import { useEffect, useState } from "react";
import { fetchUser } from "redux/slices/auth";
import Loading from "components/Loading";

function App() {

  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const [checkBeforeRender, setCheckBeforeRender] = useState(true);

  useEffect(() => {
    let token = getToken();   //get token from localstorage
    setToken(token);        //set token to localstorage
    dispatch(fetchUser());
    setCheckBeforeRender(false);
  }, [dispatch]);

  if (loading || checkBeforeRender) {
    return <Loading />;
  }

  return (
    <div className="App h-full font-custom">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/join" exact component={Join} />
        <Route path="/" exact component={Register} />
        <Route path="/home" exact component={Home}/>
      </Switch>
    </div>
  );
}
export default App;
